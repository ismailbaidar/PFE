<?php

namespace App\Console;

use App\Models\Product;
use DateTime;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     */
    protected function schedule(Schedule $schedule): void
    {
        $schedule->call(function () {
            $data = Product::all();
            foreach ($data as $product) {
                if ($product->releaseDate != null) {
                    $dateNow = new DateTime();
                    $dateNow = $dateNow->format('Y-m-d H:i');
                    $dateRelease = new DateTime($product->releaseDate);
                    $dateRelease = $dateRelease->format('Y-m-d H:i');
                    var_dump($dateRelease,$dateNow,$dateRelease==$dateNow);
                    if ($dateNow == $dateRelease) {
                        $product->status = 'new';
                        $product->save();
                    }
                }
            }
        })->everyMinute();
    }

    /**
     * Register the commands for the application.
     */
    protected function commands(): void
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
