<?php

namespace App\Observers;

use App\Models\Spect;

class SpectObserver
{
    /**
     * Handle the Spect "created" event.
     */
    public function created(Spect $spect): void
    {
        $message="l'utilisateur ".request()->user()->id." a ajouter spect #".$spect->id;
        $spect->logs()->create(['content'=>$message,'action'=>'Ajouter']);
    }

    /**
     * Handle the Spect "updated" event.
     */
    public function updated(Spect $spect): void
    {
        $message="l'utilisateur ".request()->user()->id." a modifier spect #".$spect->id;
        $spect->logs()->create(['content'=>$message,'action'=>'modifier']);
    }

    /**
     * Handle the Spect "deleted" event.
     */
    public function deleted(Spect $spect): void
    {
        $message="l'utilisateur ".request()->user()->id." a supprimer spect #".$spect->id;
        $spect->logs()->create(['content'=>$message,'action'=>'supprimer']);    }

    /**
     * Handle the Spect "restored" event.
     */
    public function restored(Spect $spect): void
    {
        //
    }

    /**
     * Handle the Spect "force deleted" event.
     */
    public function forceDeleted(Spect $spect): void
    {
        //
    }
}
