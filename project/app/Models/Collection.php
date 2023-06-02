<?php

namespace App\Models;

use App\Models\Product;
use App\Models\Collectionitem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Collection extends Model
{
    use HasFactory;
    public function products(){
        return $this->hasManyThrough(Product::class,Collectionitem::class);
    }
    public function collectionitems(){
        return $this->hasMany(Collectionitem::class);
    }
}
