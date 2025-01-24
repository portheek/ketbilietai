<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return Question::All();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'categories_id' => 'required',
            'question' => 'required',
            'image' => 'required'
        ]);

        $item = Question::create($validatedData);

        return response()->json(['id' => $item->id], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Question::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $item = Question::find($id);

        if (!$item) {
            return response()->json(['error' => 'Question not found'], 404);
        }

        $item->update($request->all());

        return response()->json($item, 200);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Question::find($id);

        if (!$item)
        {
            return response()->json(['message' => 'Item not found'], 404);
        }

        $item->delete();

        return response()->json(['message' => 'Item deleted successfully'], 200);
    }
    

    public function getAllByCategory(string $id)
    {
        return response()->json(Question::where('categories_id', '=', $id)->get());

    }

    public function getCount()
    {
        $questionsCount = Question::count();
        
        return response()->json(['questionsCount' => $questionsCount], 200);
    }


}
