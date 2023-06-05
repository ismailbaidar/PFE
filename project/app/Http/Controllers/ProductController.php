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
        $products= Product::with(['categorie:id,name','brand:id,name'])->get();
        $products=$products->makeHidden(['brand_id','categorie_id','description']);
        return response()->json(['products'=>$products]);
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
            foreach(json_decode($request->options) as $option){
                $produit->spects()->attach($option->key,['value'=>$option->value]);
            }
            foreach($request->file('images') as $img ){
                $imgPath = time().'.'.$img->getClientOriginalExtension();
                $img->StoreAs('images',$imgPath,'public');
                $produit->images()->create(['url'=>$imgPath]);
            }
            return response()->json(['status'=>'produit bien ajouter #'.$produit->id]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()],404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $produit = Product::with(['spects','images','categorie','brand'])->where('id',$id)->first();
        return response()->json(['produit'=>$produit]);
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

        $produit->spects()->detach();
        foreach(json_decode($request->options) as $option){
            $produit->spects()->attach($option->key,['value'=>$option->value]);
        }

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
            return response()->json(['error'=>$th->getMessage()],404);
        }


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $produit = Product::find($id);
        $produitImages = $produit->images();
        foreach($produitImages as $img){
            Storage::delete('public/images'.$img->url);
            $img->delete();
        }
        $produit->delete();
        return response()->json(['status'=>'product deleted #'.$produit->id]);
    }
}
