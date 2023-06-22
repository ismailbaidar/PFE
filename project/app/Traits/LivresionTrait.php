<?php

namespace App\Traits;

use App\Models\User;
use App\Models\Livresion;

trait LivresionTrait
{
    public function livre(){
        $livreur = User::livreurs()->with(['ville'=>function($query){
            $query->where('City',$this->shipping->shipping_city);
         }])->first();

        Livresion::create(['livreur_id'=>$livreur->id,'order_id'=>$this->id]);
    }
}
