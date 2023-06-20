<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->integer('total_price');
            $table->String('name');
            $table->String('prenom');
            $table->String('tele');
            $table->enum('status',['ordered','processing','delivered','canceled']);
            $table->enum('satatus_payment',['paid','not paid']);
            $table->foreignId('shipping_id')->constrained();
            $table->foreignId('discount_id')->nullable()->constrained();
            $table->foreignId('payment_id')->nullable()->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
