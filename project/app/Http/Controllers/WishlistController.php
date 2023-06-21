<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Test\Constraint\ResponseIsUnprocessable;

class WishlistController extends Controller
{
    public function toggleProducts(Request $request){
        $productUser = Wishlist::where(["user_id"=>$request->user,"product_id"=>$request->product])->first();
        if($productUser){
            $productUser->delete();
            return response()->json(["message"=>"products","wishlist"=>Wishlist::where(["user_id"=>$request->user,"product_id"=>$request->product])->get()]);
        }
        Wishlist::create(["user_id"=>$request->user,"product_id"=>$request->product]);
        return response()->json(["message"=>"products added to wishlist"]);

    }

    public function getUserWishlist(Request $request,$id){
        return Wishlist::where("user_id",$id)->get();
    }
}
