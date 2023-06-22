<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }

    public function ville()
    {
        return $this->hasOne(Livreurcity::class, 'livreur_id');
    }

    public function livresions()
    {
        return $this->hasMany(Livresion::class, 'livreur_id', 'id');
    }

    public function scopeLivreurs($query)
    {
        return $query->where('role', 'livreur');
    }

    protected $fillable = [
        'name',
        'email',
        'password',
        'code',
        'role'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
}
