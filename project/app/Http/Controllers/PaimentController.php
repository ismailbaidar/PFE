<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\Discount;
use App\Models\Livresion;
use App\Models\Shipping;
use App\Models\Shippingcity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaimentController extends Controller
{


    function checkCoupon(Request $request){

        $couponI  = Discount::where('code',$request->coupon)->first();
        if($couponI){
            return response()->json(['status'=>'valid','coupon'=>$couponI]);
        }
        return response()->json([],404);
    }

    function paimentlivresion(Request $request){
        \Stripe\Stripe::setApiKey(config('stripe.sk'));
        $products=json_decode($request->products);
        $ShippingCity = Shippingcity::find($request->ville);
        $adress=['address' => [
            'line1' => $request->adress,
            'city' => $ShippingCity->city,
            'postal_code' =>$request->postalCode,
            'country' => 'MA',
        ]];

        $order = Order::create([
            'user_id'=>$request->user()->id,
            'total_price'=>'0',
            'status'=>'ordered',
            'satatus_payment'=>'not paid',
        ]);
        $lineItems=[];
        $coupon=[];
        foreach($products as $productItem ){
            $product = Product::find($productItem->id);
            if($product->stock>$productItem->qte){
                $product->stock-=$productItem->qte;
                $product->save();
                $order->products()->attach($product->id,['qte'=>$productItem->qte]);
                        $order->total_price+=intval($product->price-($product->discount*$product->price/100))*intval($productItem->qte)*100;
                        $order->save();
            }
            else{
                if($product->stock>0){
                    $order->products()->attach($product->id,['qte'=>$product->stock]);
                    $product->stock-=$product->stock;
                    $product->save();
                        $order->total_price+=intval($product->price-($product->discount*$product->price/100))*intval($productItem->qte)*100;
                        $order->save();
                        session('qteIssue','we have only  '.$product->stock.'in product '.$product->id);
                }
                else{
                session('qteIssue','product '.$product->id.'is out of stock');
                }

            }

        }
        if($request->filled('coupon')){
            $couponI  = Discount::where('code',$request->coupon)->first();
            if($couponI){
                $order->discount_id=$couponI->id;
                $order->save();
                $coupon[]= ['coupon'=>$couponI->code];
            }

        }
        $shipping = Shipping::create([
            'shipping_adress' => $adress['address']['line1'],
            'shipping_zip' => $adress['address']['postal_code'],
            'shipping_city' => $adress['address']['city'],
            'shipping_fee' => $order->total_price+$order->total_price*$ShippingCity->price/100,
        ]);

        $order->shipping_id = $shipping->id;
        $order->save();

    }


    function checkout(Request $request){
        \Stripe\Stripe::setApiKey(config('stripe.sk'));
        $products=json_decode($request->products);
        $ShippingCity = Shippingcity::find($request->ville);

        $adress=['address' => [
            'line1' => $request->adress,
            'city' => $ShippingCity->city,
            'postal_code' =>$request->postalCode,
            'country' => 'MA',
        ]];
        /* $shipping = Shipping::create([
            'shipping_adress'=>$request->adress,
            'shipping_zip'=>$request->postal,
            'shipping_city'=>$request->ville,
            'shipping_fee'=>''
        ]); */

        $order = Order::create([
            'user_id'=>$request->user()->id,
            'total_price'=>'0',
            'status'=>'ordered',
            'satatus_payment'=>'not paid',
        ]);
        $lineItems=[];
        $coupon=[];
        foreach($products as $productItem ){
            $product = Product::find($productItem->id);
            if($product->stock>$productItem->qte){
                $order->products()->attach($product->id,['qte'=>$productItem->qte]);
                $product->stock-=$productItem->qte;
                $product->save();
                $lineItems[]=[
                    'price_data'=>[
                        'currency'=>'usd',
                        'product_data'=>[
                            'name'=>$product->name
                        ],
                        'unit_amount'=>intval($product->price-($product->discount*$product->price/100))*100,
                    ],
                    'quantity'=>intval($productItem->qte)
                        ];
                        $order->total_price+=intval($product->price-($product->discount*$product->price/100))*intval($productItem->qte)*100;
                        $order->save();
            }
            else{
                if($product->stock>0){
                    $order->products()->attach($product->id,['qte'=>$productItem->qte]);
                    $product->stock-=$product->stock;
                    $product->save();
                    $lineItems[]=[
                        'price_data'=>[
                            'currency'=>'usd',
                            'product_data'=>[
                                'name'=>$product->name
                            ],
                            'unit_amount'=>intval($product->price-($product->discount*$product->price/100))*100
                        ],
                        'quantity'=>intval($product->stock)
                        ];
                        $order->total_price+=intval($product->price-($product->discount*$product->price/100))*intval($productItem->qte)*100;
                        $order->save();
                        session('qteIssue','we have only  '.$product->stock.'in product '.$product->id);
                }
                else{
                session('qteIssue','product '.$product->id.'is out of stock');
                }

            }

        }
        if($request->filled('coupon')){
            $couponI  = Discount::where('code',$request->coupon)->first();
            if($couponI){
                $order->discount_id=$couponI->id;
                $order->save();
                $coupon[]= ['coupon'=>$couponI->code];
            }

        }
        $session=\Stripe\Checkout\Session::create([
            'line_items'=>$lineItems,
                'mode'=>'payment',
                'success_url'=>route('r'),
                'cancel_url'=>route('c'),
                'discounts' => $coupon,
                'shipping_options'=>[
                    [
                        'shipping_rate_data' => [
                            'type' => 'fixed_amount',
                            'fixed_amount' => [
                              'amount' => ($order->total_price+$order->total_price*$ShippingCity->price/100),
                              'currency' => 'usd',
                            ],
                            'display_name' => 'shipping',
                          ],
                    ]
                ]

            ]);
            session()->start();
            $request->session()->put('Token_id',$session->id);
            $request->session()->put('adress',$adress);
            $request->session()->put('order_id',$order->id);
            return response()->json(['url'=>$session->url]);
    }

    public function getUserOrders(Request $request,$id){
        return response()->json(Order::where("user_id",$id)->with("products",'shipping')->get());
    }
    public function getLivreurOrders(Request $request,$id){
        return response()->json(Livresion::where("livreur_id",$id)->with('order.shipping')->get());
    }

    public function changeOrderStatus(Request $request,$id){
        Order::find($id)->update(["status"=>"delivered"]);
    }
}
