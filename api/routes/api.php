<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*$payload = [
    'password'=>\Hash::make('admin'),
    'email'=>'admin@admin.dev',
    'name'=>'Admin',
    'auth_token'=> ''
];

$user = new \App\User($payload);
$user->save();*/



Route::group(['middleware' => ['jwt.auth','api-header']], function () {

    Route::resource('product', 'ProductController')->only([
        'index', 'store', 'update', 'destroy','edit'
    ]);

    Route::resource('category', 'CategoryController')->only([
        'index', 'store', 'update', 'destroy','edit'
    ]);
});
Route::group(['middleware' => 'api-header'], function () {

    // The registration and login requests doesn't come with tokens
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them

    Route::post('/login', 'Auth\JWTController@login');
    Route::post('/register', 'Auth\JWTController@register');
});
