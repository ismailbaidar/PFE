<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data = $request->validate(['*'=>'required']);
            $produit =Produit::create([
                'name'=>$request->name,
                'description'=>$request->description,
                'price'=>$request->price,
                'discount'=>$request->discount,
                'stock'=>$request->stock,
                'brand_id'=>$request->brand,
                'categorie'=>$request->categorie
            ]);
            foreach($request->images as $img ){
                $imgPath = time().'.'.$img->getClientOriginalExtension();
                $img->StoreAs('images',$imgPath,'public');
                $produit->images()->create(['url'=>$imgPath]);
            }
            return response()->json(['status'=>'produit bien ajouter #'].$produit);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
