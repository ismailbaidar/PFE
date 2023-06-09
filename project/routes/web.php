<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaimentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/checkout',[PaimentController::class,'checkout']);
Route::get('/success',function(){
    dd(request());
})->name('r');
Route::get('/cancel',function(){
    return 'cc';
})->name('c');
