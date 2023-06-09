<?php

namespace App\Models;

use App\Models\Brand;
use App\Models\Spect;
use App\Models\Categorie;
use App\Models\Image;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
<<<<<<< Updated upstream
    protected $fillable = ["name","price","stock","discount","description","brand_id","categorie_id",'releaseDate'];
=======
    protected $fillable = ["name","price","stock","discount","description","brand_id","categorie_id","images"];
>>>>>>> Stashed changes
    protected $guarded=[];
    public function categorie(){
        return $this->belongsTo(Categorie::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }

    public function spects(){
        return $this->belongsToMany(Spect::class)->withPivot('value');
    }

    public function images(){
        return $this->morphMany(Image::class,'imageable');
    }

}

