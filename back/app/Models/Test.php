<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    /** @use HasFactory<\Database\Factories\TestFactory> */
    //use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'users_id',
        'title',
        'summary',
        'questions_count',
        'test_time'
    ];
}
