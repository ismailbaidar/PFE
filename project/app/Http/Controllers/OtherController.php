<?php

namespace App\Http\Controllers;

use ZipArchive;
use Illuminate\Support\Str;
use App\Models\Shippingcity;
use App\Models\Categorie;

use Illuminate\Http\Request;

class OtherController extends Controller
{

    public function getShippingcity(){
        $all = Shippingcity::all();
        return response()->json(['all'=>$all]);
    }


    public function childes(){
        $all = Categorie::with('childes.childes')->get();
        return response()->json(['categories'=>$all]);

    }

    public function addCvc(Request $request)
    {
        try{
            Shippingcity::truncate();
            foreach($request->all() as $shipping){
                Shippingcity::create(['city'=>$shipping['Villes'],'price'=>$shipping['Laivraison']]);
            }
            return response()->json(['status'=>'good']);
        }
        catch(\Throwable $e){
            return response()->json(['status'=>$e->getMessage()],400);
        }
    }
}
