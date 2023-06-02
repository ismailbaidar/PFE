<?php

namespace App\Observers;

use App\Models\Brand;

class BrandObserver
{
    /**
     * Handle the Brand "created" event.
     */
    public function created(Brand $brand): void
    {
        $message = "l'utilisateur ".request()->user()->id." a ajouter une marque  #".$brand->id;
        $brand->logs()->create(['content'=>$message,'action'=>'Ajouter']);
    }

    /**
     * Handle the Brand "updated" event.
     */
    public function updated(Brand $brand): void
    {
        $message = "l'utilisateur ".request()->user()->id." a modifier une marque  #".$brand->id;
        $brand->logs()->create(['content'=>$message,'action'=>'modifier']);    }

    /**
     * Handle the Brand "deleted" event.
     */
    public function deleted(Brand $brand): void
    {
        $message = "l'utilisateur ".request()->user()->id." a supprimer une marque  #".$brand->id;
        $brand->logs()->create(['content'=>$message,'action'=>'supprimer']);
    }

    /**
     * Handle the Brand "restored" event.
     */
    public function restored(Brand $brand): void
    {
        //
    }

    /**
     * Handle the Brand "force deleted" event.
     */
    public function forceDeleted(Brand $brand): void
    {
        //
    }
}
