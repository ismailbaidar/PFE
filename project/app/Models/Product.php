<?php

namespace App\Models;

use App\Models\Brand;
use App\Models\Spect;
use App\Models\Categorie;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    public function categorie(){
        return $this->belongsTo(Categorie::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }

    public function spects(){
        return $this->belongsToMany(Spect::class)->withPivot('value');
    }

    
}
