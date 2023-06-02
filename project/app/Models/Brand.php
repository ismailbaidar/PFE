<?php

namespace App\Models;

use App\Models\Log;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Brand extends Model
{
    use HasFactory;
    public function products(){
        return $this->hasMany(Product::class);
    }
    public function logs(){
        return $this->morphMany(Log::class,'logable');
    }
    protected $fillable=['name','img'];
}
