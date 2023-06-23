<?php

namespace Database\Factories;
use Stripe\Coupon;
use App\Models\Discount;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Discount>
 */
class discountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        \Stripe\Stripe::setApiKey(config('stripe.sk'));
        return [
            $coupon = Coupon::create([
                'name' => Str::random(15),
                'percent_off' => rand(5,40),
                'duration' => fake()->date,
                'duration_in_months' => 4,
            ]),
            Discount::create([
                'code'=>$coupon->name,
                'prc'=>$coupon->percent_off,
                'status'=>'active'
            ])
        ];
    }
}
