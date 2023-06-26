<?php

use Stripe\Coupon;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Shipping;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/









Route::get('/success', function (Request $request) {
    \Stripe\Stripe::setApiKey(config('stripe.sk'));
    $sessionId = $request->session();
    $adress = $sessionId->get('adress');
    $user=$sessionId->get('user_id');
    $id = $sessionId->get('Token_id');
    $paymentDetails = \Stripe\Checkout\Session::retrieve($id);
    $shippingFee = $paymentDetails->shipping_cost->amount_subtotal;
    $paymentMethod = $paymentDetails->payment_method;
    $paymentEmail = $paymentDetails->customer_details->email;
    $paymentName = $paymentDetails->customer_details->name;
    $amount = $paymentDetails->amount_total/100;
    $currency = $paymentDetails->currency;
    $transactionId = $paymentDetails->payment_intent;
    $paymentIntent = \Stripe\PaymentIntent::retrieve($transactionId);
    $paymentMethodId = $paymentIntent->payment_method;
    $paymentData = \Stripe\PaymentMethod::retrieve($paymentMethodId);
    $cardNumber = $paymentData->card->last4;
    $exp_date = $paymentData->card->exp_month.'/'.$paymentData->card->exp_year;
    $cvc = $paymentData->card->checks->cvc_check;
    $user=User::find($user);
    $user->points+=($amount/100)*0.02;
    $user->save();
    $payment = Payment::create([
        'payment_method' => 'card',
        'payment_email' => $paymentEmail,
        'amount' => $amount,
        'currency' => $currency,
        'transaction_id' => $transactionId,
        'card_number' => $cardNumber,
        'expiration_date' => $exp_date,
        'card_holder_name' => $paymentName,
        'card_cvc' => $cvc,
    ]);
    $shipping = Shipping::create([
        'shipping_adress' => $adress['address']['line1'],
        'shipping_zip' => $adress['address']['postal_code'],
        'shipping_city' => $adress['address']['city'],
        'shipping_fee' => $shippingFee,
    ]);
    $order = Order::find($sessionId->get('order_id'));
    $order->payment_id = $payment->id;
    $order->shipping_id = $shipping->id;
    $order->satatus_payment='paid';
    $order->save();
    $order->livre();
    return redirect()->away('http://localhost:3000/checkout');
})->name('r');
Route::get('/cancel', function () {
    \Stripe\Stripe::setApiKey(config('stripe.sk'));
    $coupon = Coupon::create([
        'percent_off' => rand(4, 20),
        'duration' => 'repeating',
        'duration_in_months' => 3,
        'name' => 'Coupon',
        'id' => Str::random('12'),
    ]);
    dd($coupon->id);
})->name('c');
