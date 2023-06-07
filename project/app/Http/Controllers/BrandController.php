<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $brands = Brand::all();
        return response()->json(['brands'=>$brands]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->validate(['name'=>'required','img'=>'required']);
            $img = time().'.'.$request->file('img')->getClientOriginalExtension();
            $request->file('img')->storeAs('images',$img,'public');
            $data['img']=$img;
             $Brand = Brand::create($data);
            return response()->json(['status'=>'Brand bien cree  #'.$Brand->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Brand::findOrFail($id);
        return response()->json(['brand'=>$data]);
    }

    /**
     * Update the specified resource in storage.
    */

    public function update(Request $request, string $id)
    {
        try {
            $data = $request->validate(['name'=>'required']);
            $Brand = Brand::findOrFail($id);
            if(isset($request->file)){
                Storage::delete('public/images/'.$Brand->file);
                $img = time().'.'.$request->file('file')->getClientOriginalExtension();
                $request->file('file')->storeAs('images',$img,'public');
            }
            $Brand->update(['name'=>$request->name,'img'=>$img??$Brand->img]);
            return response()->json(['status'=>'brand bien changer #'.$Brand->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $Brand = Brand::findOrFail($id);
            $Brand->delete();
            Storage::delete('public/images/'.$Brand->img);
            return response()->json(['status'=>'brand bien supprimer #'.$Brand->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }
}
