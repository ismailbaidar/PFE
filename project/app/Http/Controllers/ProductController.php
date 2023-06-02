<?php

namespace App\Http\Controllers;

use App\Models\Product;
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

            $produit =Product::create([
                'name'=>$request->name,
                'description'=>$request->description,
                'price'=>$request->price,
                'discount'=>$request->discount,
                'stock'=>$request->stock,
                'brand_id'=>$request->brand,
                'categorie_id'=>$request->categorie
            ]);
            foreach($request->file('images') as $img ){
                $imgPath = time().'.'.$img->getClientOriginalExtension();
                $img->StoreAs('images',$imgPath,'public');
                $produit->images()->create(['url'=>$imgPath]);
            }
            return response()->json(['status'=>'produit bien ajouter #'.$produit->id]);
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
            $data = $request->validate(['*'=>'required']);
        $produit = Product::find($id);
        $produit->update([
                'name'=>$request->name,
                'description'=>$request->description,
                'price'=>$request->price,
                'discount'=>$request->discount,
                'stock'=>$request->stock,
                'brand_id'=>$request->brand,
                'categorie_id'=>$request->categorie
        ]);
        $produitImages = $produit->images();
        foreach($produitImages as $img){
            Storage::delete('public/images'.$img->url);
            $img->delete();
        }

        foreach($request->images as $img ){
            $imgPath = time().'.'.$img->getClientOriginalExtension();
            $img->StoreAs('images',$imgPath,'public');
            $produit->images()->create(['url'=>$imgPath]);
        }

        return response()->json(['status'=>'le produit est modifier #'.$produit->id]);

        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()]);
        }


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
