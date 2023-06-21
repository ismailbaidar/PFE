<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    function AddSliderImage(Request $request){
        try {
            $item  = Slider::firstOrCreate(['name'=>$request->name]);
            $path =Str::random(12).''.$request->file('imageSlider')->getClientOriginalExtension();
            $request->file('imageSlider')->storeAs('images',$path,'public');
            $item->sliderimages()->create(['img'=>$path]);
            return response()->json(['status'=>'images bien ajouter']);}
            catch (\Throwable $th) {
                return response()->json(['status'=>$th->getMessage()],500);
        }

    }

    function getSliders(){
        try {
            $sliders = Slider::with('sliderimages')->get();
            return response()->json(['sliders'=>$sliders]);        }
            catch (\Throwable $th) {
                return response()->json(['status'=>$th->getMessage()],500);
        }

    }

    function deleteImage(Request $request){
        try {
            $sliders = Slider::find($request->slider)->sliderimages()->where('id',$request->image)->delete();
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
}
