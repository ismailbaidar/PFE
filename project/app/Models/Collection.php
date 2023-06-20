<?php

namespace App\Models;

use App\Models\Product;
use App\Models\Collectionitem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Collection extends Model
{
    use HasFactory;
   protected $guarded=[];
    public function products(){
        return $this->belongsToMany(Product::class);
    }
}
