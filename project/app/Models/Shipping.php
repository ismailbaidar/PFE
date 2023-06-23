<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    use HasFactory;
    protected $guarded=[];
    protected $fillable = ["shipping_adress","shipping_zip","shipping_city","shipping_fee"];
}
