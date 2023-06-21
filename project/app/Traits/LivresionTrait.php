<?php

namespace App\Traits;

trait LivresionTrait
{
    public function livre(){
             User::livreurs()->withCount('livresions')->orderBy('livresions_count')->first();
    }
}