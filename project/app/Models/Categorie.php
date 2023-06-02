<?php

namespace App\Models;

use App\Models\Log;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Categorie extends Model
{
    use HasFactory;
    protected $guarded=[];
    public function products(){
        return $this->hasMany(Product::class);
    }

    public function logs(){
        return $this->morphMany(Log::class,'logable');
    }
}
