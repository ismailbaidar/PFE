<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    protected $fillable = [
        'message',
        'read',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function broadcast()
    {
        $pusher = new Pusher(env('PUSHER_APP_KEY'), env('PUSHER_APP_SECRET'), env('PUSHER_APP_ID'), [
            'cluster' => env('PUSHER_APP_CLUSTER'),
            'useTLS' => true,
        ]);

        $pusher->trigger('notifications-channel', 'new-notification', [
            'notification' => $this,
        ]);
    }
}
