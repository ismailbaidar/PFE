<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    public function update(Request $request,$id){
        User::where('id',$id)->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'code'=>$request->code ,
        ]);
    }
}
