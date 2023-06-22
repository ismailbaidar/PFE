<?php

namespace App\Providers;

use App\Events\PointCreation as PointEvent;
use App\Events\VerifyEvent;
use App\Listeners\PointCreation as PointListener;
use App\Listeners\VerifyListener;
use App\Models\Brand;
use App\Models\Categorie;
use App\Models\Spect;
use App\Observers\BrandObserver;
use App\Observers\CategorieObserver;
use App\Observers\SpectObserver;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        VerifyEvent::class => [
            VerifyListener::class,
        ],
        PointEvent::class => [
            PointListener::class,
        ],

    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        Categorie::observe(CategorieObserver::class);
        Brand::observe(BrandObserver::class);
        Spect::observe(SpectObserver::class);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
