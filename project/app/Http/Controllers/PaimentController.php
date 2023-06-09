<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaimentController extends Controller
{
    function checkout(){
        \Stripe\Stripe::setApiKey(config('stripe.sk'));
        $session=\Stripe\Checkout\Session::create([
            'line_items'=>[
                [
                    'price_data'=>[
                        'currency'=>'usd',
                        'product_data'=>[
                            'name'=>'Laptop Asus'
                        ],
                        'unit_amount'=>1282.00,
                    ],
                    'quantity'=>1
                ],
                [
                    'price_data'=>[
                        'currency'=>'usd',
                        'product_data'=>[
                            'name'=>'Laptop Dell'
                        ],
                        'unit_amount'=>1200.00,
                    ],
                    'quantity'=>1
                ],
                [
                    'price_data'=>[
                        'currency'=>'usd',
                        'product_data'=>[
                            'name'=>'Laptop Hp'
                        ],
                        'unit_amount'=>1200.00,
                    ],
                    'quantity'=>1
                ],
                ],
                'mode'=>'payment',
                'success_url'=>route('r'),
                'cancel_url'=>route('c')

            ]);
            return redirect()->away($session->url);
    }
}
