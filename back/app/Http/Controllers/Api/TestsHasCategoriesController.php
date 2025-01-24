<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TestsHasCategories;

class TestsHasCategoriesController extends Controller
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
            'tests_id' => 'required|integer', 
            'categories_id' => 'required|integer'
        ]);


        $item = TestsHasCategories::create($validatedData);

        return response()->json([
            'message' => 'Resource created successfully',
            'data' => $item
        ], 201);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $ids = TestsHasCategories::where('tests_id', '=', $id);
        $ids->delete();
        return response()->json(['message' => 'Test categories deleted successfully'], 200);
    }
}
