<?php

namespace App\Listeners;

use App\Models\Pointuser;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class PointCreation
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        $levelesPoint=[500,750,1000,1500,2000,4000,5000,10000,20000,50000,100000,1000000];
        foreach($levelesPoint as $level){
            Pointuser::create(['level'=>$level,'used'=>0,'user_id'=>$event->user]);
        }
    }
}
