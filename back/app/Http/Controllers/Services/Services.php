<?php
namespace App\Http\Controllers\Services;

use App\Models\TestsHasCategories;
use App\Models\Question;
use App\Models\Answer;

class Services
{
    public function fetchTestCategories(string $id)
    {
        $categories = TestsHasCategories::where('tests_id', '=', $id)->get();
        return $categories;
    }

    public function fetchRandomQuestions(string $categoryId, string $count)
    {
        return Question::where('categories_id', '=', $categoryId)->inRandomOrder()->limit($count)->get();
    }

    public function fetchAnswers(string $id)
    {
        return Answer::where('questions_id', '=', $id)->get();
    }
}
