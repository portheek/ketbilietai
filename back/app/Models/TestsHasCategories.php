<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TestsHasCategories extends Model
{
    public $timestamps = false;
    
    protected $fillable = [
        'tests_id',
        'categories_id'
    ];
}
