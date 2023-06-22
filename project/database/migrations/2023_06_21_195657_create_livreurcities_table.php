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
        Schema::create('livreurcities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('livreur_id')->constrained('users')->onDelete('cascade')->onUpdate('cascade');
            $table->String('City');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('livreurcities');
    }
};
