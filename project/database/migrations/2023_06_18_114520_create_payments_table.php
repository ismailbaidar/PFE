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
        Schema::create('payments', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->enum('payment_method',['card','paypal','livresion']);
            $table->String('payment_email');
            $table->integer('amount');
            $table->String('currency');
            $table->String('transaction_id');
            $table->String('card_number');
            $table->String('expiration_date');
            $table->String('card_holder_name');
            $table->String('card_cvc');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
