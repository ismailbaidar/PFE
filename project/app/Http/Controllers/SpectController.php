<?php

namespace App\Http\Controllers;

use App\Models\Spect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SpectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $allspects = Spects::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->validate(['name'=>'required','img'=>'required']);
            $img = time().'.'.$request->file('img')->getClientOriginalExtension();
            $request->file('img')->StoreAs('images',$img,'public');
            $data['img']=$img;
            $spect=Spect::create($data);
            return response()->json(['status'=>'spect bien cree #'.$spect->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $data = $request->validate(['name'=>'required']);
            $spect = Spect::findOrFail($id);
            if($request->has('img')){
                Storage::delete('public/images/'.$spect->img);
                $img = time().'.'.$request->file('img')->getClientOriginalExtension();
                $request->file('img')->StoreAs('images',$img,'public');
            }
            $spect->update([
                'name'=>$request->name,
                'img'=>$img??$spect->img
            ]);
            return response()->json(['status'=>'spect bien modifier #'.$spect->id]);


        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $Spect = Spect::findOrFail($id);
            $Spect->delete();
            Storage::delete('public/images/'.$Spect->img);
            return response()->json(['status'=>'spect bien supprimer #'.$Spect->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }
}
