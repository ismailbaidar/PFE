<?php

namespace App\Models;

use App\Models\Product;
use App\Models\User;
use App\Models\Shipping;
use App\Traits\LivresionTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory , LivresionTrait;

    protected $guarded = [];

    public function products()
    {
        return $this->belongsToMany(Product::class)->withPivot('qte');
    }

    public  function shipping(){
        return $this->belongsTo(Shipping::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
