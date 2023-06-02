<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Events\VerifyEvent;
use App\Mail\ResetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function Register(Request $request){
        try {
            $data = $request->validate(['name'=>'required','email'=>'email|unique:users,email','password'=>'min:8']);
            $data['code']=rand(100000,900000);
            $user=User::create($data);
            event(new VerifyEvent($data));
            return response()->json(['Satus'=>'User Created ']) ;
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    function Login(Request $request){
            try {
                if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
                    $user = User::where('email',$request->email)->first();
                    $token=$user->createToken('AUTH_TOKEN')->plainTextToken;
                    return response()->json(['AUTH_TOKEN'=>$token]);
                }
            } catch (\Throwable $th) {
                return response()->json(['error'=>$th->getMessage()]);
            }
    }

    function Logout(){
        request()->user()->tokens->delete();
        return response()->json(['status'=>'bien']);
    }

    function Verify(Request $request){
        try {
            if($request->user()->code === $request->code){
                $request->user()->email_verified_at=date(' y-m-d H:i:s');
                $request->user()->code=rand(100000,900000);
                $request->user()->save();
                return response()->json(['status'=>'email bien verifier']);
            }
            return response()->json(['status'=>'code est incorrect']);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    function ResetPassword(Request $request){
        try {
            $code = rand(100000,900000);
            $request->user()->code=$code;
            Mail::to($request->user()->email)->send(new ResetPassword($code));
            return  response()->json(['status'=>'verifier votre email pour recevoir le code']);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }
    }
