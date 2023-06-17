<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\SpectController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register',[AuthController::class,'Register']);
Route::post('login',[AuthController::class,'Login']);
Route::group(['middleware'=>"auth:sanctum"],function(){
    Route::post('VerifyEmail',[AuthController::class,'Verify']);

    Route::post('categorie/{id}',[CategorieController::class,'update']);
    Route::apiResource('categorie',CategorieController::class)->except('update');



    Route::post('brand/{id}',[BrandController::class,'update']);
    Route::apiResource('brand',BrandController::class)->except('update');

    Route::post('spect/{id}',[SpectController::class,'update']);
    Route::apiResource('spect',SpectController::class)->except('update');

    Route::post('product/{id}',[ProductController::class,'update']);
    Route::apiResource('product',ProductController::class)->except('update');
    Route::post("/updateUser",[UserController::class,"update"]);

});







