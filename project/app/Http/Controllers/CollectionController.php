<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __construct (){
        $this->middleware('auth:sanctum')->except(['show','index']);
    }
    public function index()
    {
        $collections = Collection::with(['products'=>function($query){
            $query->with('images');
        }])->get();
        return response()->json(['collections'=>$collections]);
    }

    /**
     * Show the form for creating a new resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $data=$request->validate(['name'=>'required','decription'=>'required']);
            $listProduct = json_decode($request->products);
            $listIds=array_map(fn($item)=>$item->id,$listProduct);
            $total = array_reduce($listProduct,fn($a,$t)=>$a+=$t->price);
            $data['totalPrice']=$total;
            $data['discount']=$request->discount ?? 0;
            $collection=Collection::create($data);
            $collection->products()->attach($listIds);
            return response()->json(['status'=>'bien ajouter']);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th->getMessage()],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $collection=Collection::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     */

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
