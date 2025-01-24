<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TestController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\QuestionController;
use App\Http\Controllers\Api\AnswerController;
use App\Http\Controllers\Api\TestsHasCategoriesController;
use App\Http\Controllers\AuthController;

Route::middleware(['auth:api'])->group(function ()
{
    Route::prefix('tests')->group(function ()
    {
        Route::middleware('admin')->group(function ()
        {
            Route::post('/', [TestController::class, 'store']);
            Route::put('/{id}', [TestController::class, 'update']);
            Route::delete('/{id}', [TestController::class, 'destroy']);
        });

        Route::get('/', [TestController::class, 'index']);
        Route::get('/{id}', [TestController::class, 'show']);
        Route::get('{id}/questions/{count}', [TestController::class, 'getQuestions']);
        Route::get('/count', [TestController::class, 'getCount']);
    });

    Route::prefix('questions')->group(function ()
    {
        Route::middleware('admin')->group(function ()
        {
            Route::post('/', [QuestionController::class, 'store']);
            Route::put('/{id}', [QuestionController::class, 'update']);
            Route::delete('/{id}', [QuestionController::class, 'destroy']);
        });

        Route::get('/', [QuestionController::class, 'index']);
        Route::get('/{id}', [QuestionController::class, 'show']);
        Route::get('getAllByCategory/{id}', [QuestionController::class, 'getAllByCategory']);
        Route::get('/count', [QuestionController::class, 'getCount']);
    });

    Route::prefix('answers')->group(function ()
    {
        Route::middleware('admin')->group(function ()
        {
            Route::get('/', [AnswerController::class, 'index']);
            Route::post('/', [AnswerController::class, 'store']);
            Route::get('/{id}', [AnswerController::class, 'show']);
            Route::put('/{id}', [AnswerController::class, 'update']);
            Route::delete('/{id}', [AnswerController::class, 'destroy']);
            Route::get('getAllFromQuestion/{id}', [AnswerController::class, 'getAllFromQuestion']);
            Route::delete('deleteByQuestionId/{id}', [AnswerController::class, 'destroyAllbyQuestionId']);
        });
    });

    Route::prefix('categories')->group(function ()
    {
        Route::middleware('admin')->group(function ()
        {
            Route::post('/', [CategoryController::class, 'store']);
            Route::put('/{id}', [CategoryController::class, 'update']);
            Route::delete('/{id}', [CategoryController::class, 'destroy']);
        });

        Route::get('/', [CategoryController::class, 'index']);
        Route::get('/{id}', [CategoryController::class, 'show']);
    });

    Route::prefix('testscategories')->group(function ()
    {
        Route::middleware('admin')->group(function ()
        {
            Route::get('/', [TestsHasCategoriesController::class, 'index']);
            Route::post('/', [TestsHasCategoriesController::class, 'store']);
            Route::get('/{id}', [TestsHasCategoriesController::class, 'show']);
            Route::put('/{id}', [TestsHasCategoriesController::class, 'update']);
            Route::delete('/{id}', [TestsHasCategoriesController::class, 'destroy']);
        });
    });
});


Route::get('login', function (){
    return response()->json(['message' => 'No user logged in.'], 200);
})->name('login');


Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->post('/auth/logout', [AuthController::class, 'logout']);
Route::middleware('auth:api')->get('/auth/user', [AuthController::class, 'user']);
