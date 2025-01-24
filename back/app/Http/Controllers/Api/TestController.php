<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Models\Test;
use Illuminate\Http\Request;
use App\Http\Controllers\Services\Services;

class TestController extends Controller
{
    protected $service;

    public function __construct(Services $service)
    {
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Test::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'summary' => 'required',
            'questions_count' => 'required',
            'test_time' => 'required',
            'users_id' => 'required'
        ]);

        $item = Test::create($validatedData);

        return response()->json(['id' => $item->id], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Test::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Test $test)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Test::find($id);

        if (!$item)
        {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }

    public function getCount()
    {
        $questionsCount = Test::count();
        
        return response()->json(['testsCount' => $questionsCount], 200);
    }

    public function getQuestions($id, $count)
    {
        $categories = $this->service->fetchTestCategories($id);
        $categoriesIds = $categories->pluck('categories_id');

        $categoriesCount = $categoriesIds->count();
        
        if ($categoriesCount == 0) {
            return response()->json(['error' => 'No categories found for this test'], 404);
        }

        $questionsCount = intval($count);
        $questionsPerCategory = intval($questionsCount / $categoriesCount);

        $allQuestions = [];

        foreach ($categoriesIds as $categoryId) {
            $questionsData = $this->service->fetchRandomQuestions($categoryId, $questionsPerCategory);
            foreach ($questionsData as $question) {
                $answersData = $this->service->fetchAnswers($question->id);
                $question->answers = $answersData;
                $allQuestions[] = $question;
            }
        }

        return response()->json(['questions' => $allQuestions], 200);
    }


}
