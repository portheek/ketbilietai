<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    public $timestamps = false;
    
    protected $fillable = [
        'questions_id',
        'answer',
        'is_correct'
    ];
}
