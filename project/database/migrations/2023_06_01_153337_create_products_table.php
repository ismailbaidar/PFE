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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->String('name');
            $table->longText('description');
            $table->float('price');
            $table->float('discount');
            $table->integer('stock');
            $table->integer('rate')->default(0);
            $table->enum('status',['new','standard','coming Soon','promo'])->default('new');
            $table->foreignId('brand_id')->constrained();
            $table->foreignId('categorie_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
