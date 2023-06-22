<?php

namespace App\Http\Controllers;

use App\Mail\Coupon;
use App\Models\User;
use App\Models\Discount;
use App\Models\Categorie;
use App\Models\Pointuser;
use Stripe\Coupon as CS ;
use Illuminate\Support\Str;
use App\Models\Shippingcity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\Order;

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
        $user = User::create(['name' => Str::random(7), 'role' => 'livreur', 'email' => $email, 'password' => $password, 'code' => rand(111111, 999999)]);
        $user->ville()->create(['City' => Shippingcity::find($request->city)->city]);

        return response()->json(['password' => $password, 'email' => $email]);
    }

    public function DeletUser(Request $request)
    {
        $user = User::find($request->id);
        $user->delete();

        return response()->json(['status' => 'bien Ajouter']);
    }

    public function GetCoupon(Request $request)
    {
        $level = $request->level;
        $levels = ['500' => '2', '750' => '4', '1000' => '8', '1500' => '10', '2000' => '12', '4000' => '15', '5000' => '20', '10000' => '25', '20000' => '30', '50000' => '35', '100000' => '45', '1000000' => '100'];
        \Stripe\Stripe::setApiKey(config('stripe.sk'));

        $coupon = CS::create([
            'percent_off' => $levels[$level],
            'duration' => 'repeating',
            'duration_in_months' => 1,
            'name' => 'Coupon',
            'id' => Str::random('12'),
        ]);
        $user=$request->user();
        $point = $user->pointLevel->where('level',$level)->first();
        $point->used = 1;
        $point->save();
        $discount = Discount::create(['code' => $coupon->id, 'prc' => $coupon->percent_off, 'status' => 'active']);
        Mail::to($request->user()->email)->send(new Coupon($coupon->id));
        return response()->json(['status' => 'bien faites']);
    }

    public function childes()
    {
        $all = Categorie::with('childes.childes')->get();

        return response()->json(['categories' => $all]);
    }

    public function getAllAdmins()
    {
        $Admins = User::where('role', '<>', 'livreur')->get();

        return response()->json(['users' => $Admins]);

    }

    public function toogleAdmin(Request $request)
    {
        $user = User::find($request->id);
        $role = $user->role;
        $nrole = $role === 'admin' ? 'user' : 'admin';
        $user->role = $nrole;
        $user->save();

        return response()->json(['status' => 'bien ajouuter']);
    }

    public function addCvc(Request $request)
    {
        try {
            Shippingcity::truncate();
            foreach ($request->all() as $shipping) {
                Shippingcity::create(['city' => $shipping['Villes'], 'price' => $shipping['Laivraison']]);
            }

            return response()->json(['status' => 'good']);
        } catch (\Throwable $e) {
            return response()->json(['status' => $e->getMessage()], 400);
        }
    }

    public function getAllOrders(){
        $allOrders=Order::with('user')->get();
        return response()->json(['orders'=>$allOrders]);
    }
}
