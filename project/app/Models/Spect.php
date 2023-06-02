<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Spect extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function logs(){
        return $this->morphMany(Log::class,'logable');
    }

    public function products(){
        return $this->belongsToMany(Product::class);
    }
}
