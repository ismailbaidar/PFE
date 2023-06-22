<?php

namespace App\Http\Controllers;

use App\Models\Shippingcity;
use App\Models\User;
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





    public function getAllAdmins(){
        $Admins = User::where('role','<>','livreur')->get();
        return response()->json(['users'=>$Admins]);
    }

    public function addCvc(Request $request)
    {
        $file = $request->file('csv');
        $path = Str::random(5).'.'.$file->getClientOriginalExtension();
        $file->storeAs('other', $path, 'public');
        $zip = new ZipArchive;
        if ($zip->open(public_path('storage').'\\other\\'.$path) === true) {
            $extractedFilePath = file_get_contents(public_path('storage').'\\other\\'.$path);
            dd($extractedFilePath);
            if ($extr = $zip->extractTo(public_path('storage').'\\other\\', [$zip->getNameIndex(0)])) {
                $zip->close();
            } else {
                echo 'Failed to extract the CSV file from the ZIP archive.';
            }
        } else {
            echo 'Failed to open the ZIP archive.';
        }

    }
}
