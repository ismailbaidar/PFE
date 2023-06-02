<?php

namespace App\Observers;

use App\Models\categorie;

class CategorieObserver
{
    /**
     * Handle the categorie "created" event.
     */
    public function created(categorie $categorie): void
    {
        $message = "l' utilisateur ".request()->user()->id." a ajouter la categorie  #".$categorie->id;
        $categorie->logs()->create(['content'=>$message,'action'=>'Ajouter']);
    }

    /**
     * Handle the categorie "updated" event.
     */
    public function updated(categorie $categorie): void
    {
        $message = "l' utilisateur ".request()->user()->id." a modifier la categorie  #".$categorie->id;
        $categorie->logs()->create(['content'=>$message,'action'=>'modifier']);
      }

    /**
     * Handle the categorie "deleted" event.
     */
    public function deleted(categorie $categorie): void
    {
        $message = "l' utilisateur ".request()->user()->id." a supprimer la categorie  #".$categorie->id;
        $categorie->logs()->create(['content'=>$message,'action'=>'supprimer']);
    }

    /**
     * Handle the categorie "restored" event.
     */
    public function restored(categorie $categorie): void
    {
        //
    }

    /**
     * Handle the categorie "force deleted" event.
     */
    public function forceDeleted(categorie $categorie): void
    {
    }
}
