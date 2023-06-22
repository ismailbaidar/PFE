<?php

namespace App\Http\Controllers;

use App\Models\Shippingcity;
use App\Models\User;
use App\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use ZipArchive;

class OtherController extends Controller
{
    public function getShippingcity()
    {
        $all = Shippingcity::all();

        return response()->json(['all' => $all]);
    }

    public function getLivreurs()
    {
        $livreurs = User::livreurs()->with('ville')->get();

        return response()->json(['livreurs' => $livreurs]);
    }

    public function getCitys()
    {
        return response()->json(['livreurs' => Shippingcity::all()]);
    }

    public function AddLivreur(Request $request)
    {
        $password = Str::random(7);
        $email = Str::random(7).'@gamil.com';
        $user = User::create(['name' => Str::random(7), 'role' => 'livreur', 'email' => $email, 'password' => $password,'code'=>rand(111111,999999)]);
        $user->ville()->create(['City' => Shippingcity::find($request->city)->city]);

        return response()->json(['password' => $password,'email'=>$email]);
    }

    public function DeletUser(Request $request){
        $user = User::find($request->id);
         $user->delete();
        return response()->json(['status'=>'bien Ajouter']);
    }


    public function childes(){
        $all = Categorie::with('childes.childes')->get();
        return response()->json(['categories'=>$all]);
    }


    public function getAllAdmins(){
        $Admins = User::where('role','<>','livreur')->get();
        return response()->json(['users'=>$Admins]);

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
