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
            

        ];
    }
}
