<?php


use App\Http\Controllers\PaimentController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\StatistiqueController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CollectionController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WishlistController;
use App\Http\Controllers\ProductController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OtherController;
use App\Http\Controllers\SpectController;

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

Route::get('getShippingcity', [OtherController::class, 'getShippingcity']);
Route::apiResource('collection', CollectionController::class);
Route::post('addShippingcities', [OtherController::class, 'addCvc']);
Route::post('getLivreurs', [OtherController::class, 'getLivreurs']);
Route::post('getCitys', [OtherController::class, 'getCitys']);
Route::post('AddLivreur', [OtherController::class, 'AddLivreur']);
Route::post('DeletUser', [OtherController::class, 'DeletUser']);
Route::post('getAllAdmins', [OtherController::class, 'getAllAdmins']);
Route::get('getShippingcity',[OtherController::class,'getShippingcity']);
Route::apiResource('collection',CollectionController::class);
Route::post('addShippingcities',[OtherController::class,'addCvc']);
Route::get('childes',[OtherController::class,'childes']);
Route::post('register',[AuthController::class,'Register']);
Route::post('login',[AuthController::class,'Login']);
Route::post('loginGoogle',[AuthController::class,'LoginGoogle']);
Route::post('checkCoupon',[PaimentController::class,'checkCoupon']);
Route::post('paimentlivresion',[PaimentController::class,'paimentlivresion']);
Route::get('PaimentStastistique',[StatistiqueController::class,'PaimentStastistique']);
Route::get('getStates',[StatistiqueController::class,'getStates']);

Route::post('AddSliderImage',[SliderController::class,'AddSliderImage']);
Route::post('deleteImage',[SliderController::class,'deleteImage']);
Route::get('getSliders',[SliderController::class,'getSliders']);
Route::apiResource('categorie',CategorieController::class)->except('update');
Route::apiResource('product',ProductController::class)->except('update');

Route::group(['middleware'=>"auth:sanctum"],function(){
    Route::post('paimentlivresion',[PaimentController::class,'paimentlivresion']);
    Route::post('VerifyEmail',[AuthController::class,'Verify']);
    Route::post('/checkout',[PaimentController::class,'checkout'])->middleware('web');
    Route::post('categorie/{id}',[CategorieController::class,'update']);
    Route::post('brand/{id}',[BrandController::class,'update']);
    Route::post('spect/{id}',[SpectController::class,'update']);
    Route::apiResource('brand',BrandController::class)->except('update');
    Route::apiResource('spect',SpectController::class)->except('update');
});
Route::apiResource('categorie', CategorieController::class)->except('update');
Route::apiResource('product', ProductController::class)->except('update');
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('paimentlivresion', [PaimentController::class, 'paimentlivresion']);
    Route::post('VerifyEmail', [AuthController::class, 'Verify']);
    Route::post('/checkout', [PaimentController::class, 'checkout'])->middleware('web');
    Route::post('categorie/{id}', [CategorieController::class, 'update']);
    Route::post('brand/{id}', [BrandController::class, 'update']);
    Route::apiResource('brand', BrandController::class)->except('update');

    Route::post('product/{id}',[ProductController::class,'update']);
    Route::post("/updateUser",[UserController::class,"update"]);
    Route::post("logout",[AuthController::class,"Logout"]);
    Route::post("toggleProducts",[WishlistController::class,"toggleProducts"]);
    Route::get("getUserWishlist/{id}",[WishlistController::class,"getUserWishlist"]);
    Route::get("getUserOrders/{id}",[PaimentController::class,"getUserOrders"]);
    Route::get("logs",LogController::class);});




