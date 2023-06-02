<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::withCount('products')->get();
        dd($categories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->validate(['name'=>'required','description'=>'required','img'=>'required']);
            $img = time().'.'.$request->file('img')->getClientOriginalExtension();
            $request->file('img')->storeAs('images',$img,'public');
            $data['img']=$img;
             $categorie = Categorie::create($data);
            return response()->json(['status'=>'categorie bien cree  #'.$categorie->id]);
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
            $data = $request->validate(['name'=>'required','description'=>'required']);
            $categorie = Categorie::find($id);
            if($request->has('img')){
                Storage::delete('public/images/'.$categorie->img);
                $img = time().'.'.$request->file('img')->getClientOriginalExtension();
                $request->file('img')->storeAs('images',$img,'public');
            }
            $categorie->update(['name'=>$request->name,'description'=>$request->description,'img'=>$img??$categorie->img]);
            return response()->json(['status'=>'categorie bien changer #'.$categorie->id]);
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
            $categorie = Categorie::findOrFail($id);
            $categorie->delete();
            Storage::delete('public/images/'.$categorie->img);
            return response()->json(['status'=>'categorie bien supprimer #'.$categorie->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }
    }
}
