<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('customer');
});

//Route::resource('customer','customerController');
Route::get('allcustomers','customerController@index');                           // this is a api
Route::post('createcustomer','customerController@store');
ROute::resource('datacustomer','customerController');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
