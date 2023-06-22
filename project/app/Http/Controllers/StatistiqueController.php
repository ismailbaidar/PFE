<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Order;
use App\Models\Payment;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Date;

class StatistiqueController extends Controller
{
    function PaimentStastistique(){
        $payment = Payment::groupBy(DB::raw('DATE_FORMAT(created_at, "%i")'))
        ->select(DB::raw('SUM(amount) as total_amount, DATE_FORMAT(created_at, "%i") as min'))
        ->get();
        return response()->json(['data'=>$payment]);
    }
    function getStates(Request $request){
        try {
            $users = User::count();
            $products = Product::count();
            $orders = Order::count();
            $paiment = Payment::sum('amount')/100;
            return response()->json(['state'=>['users'=>$users,'products'=>$products,'orders'=>$orders,'paiment'=>$paiment]]);        }
            catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }

    }
}
