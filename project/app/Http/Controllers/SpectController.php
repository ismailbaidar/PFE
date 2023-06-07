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
        $allspects = Spect::all();
        return response()->json(['data'=>$allspects]);
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
            return response()->json(['error'=>$th->getMessage()],404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Spect::findOrFail($id);
        return response()->json(['spect'=>$data]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $data = $request->validate(['name'=>'required']);
            $spect = Spect::find($id);
            if(!$spect){
                return response()->json(['error'=>'not found',404]);
            }
            if(isset($request->file)){
                Storage::delete('public/images/'.$spect->file);
                $img = time().'.'.$request->file('file')->getClientOriginalExtension();
                $request->file('file')->storeAs('images',$img,'public');
            }
            $spect->update([
                'name'=>$request->name,
                'img'=>$img??$spect->img
            ]);
            return response()->json(['status'=>'spect bien modifier #'.$spect->id]);


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
            $Spect = Spect::findOrFail($id);
            $Spect->delete();
            Storage::delete('public/images/'.$Spect->img);
            return response()->json(['status'=>'spect bien supprimer #'.$Spect->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()],404);
        }
    }
}
