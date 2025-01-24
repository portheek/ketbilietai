<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'questions_id' => 'required',
            'answer' => 'required',
            'is_correct' => 'required'
        ]);

        $item = Answer::create($validatedData);

        return response()->json(['id' => $item->id], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $item = Answer::find($id);

        if (!$item) {
            return response()->json(['error' => 'Answer not found'], 404);
        }

        $item->update($request->all());

        return response()->json($item, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Answer::find($id);

        if (!$item) {
            return response()->json(['error' => 'Answer not found'], 404);
        }

        $item->delete();

        return response()->json(200);
    }

    public function destroyAllbyQuestionId(string $id)
    {
        $items = Answer::where('questions_id', '=', $id);

        $items->delete();

        return response()->json(200);
    }

    public function getAllFromQuestion(string $id)
    {
        return response()->json(Answer::where('questions_id', '=', $id)->get());

    }
}
