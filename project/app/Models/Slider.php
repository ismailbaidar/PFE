<?php

namespace App\Models;

use App\Models\Sliderimage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Slider extends Model
{
    use HasFactory;
    public function sliderimages(){
        return $this->hasMany(Sliderimage::class);
    }
}
