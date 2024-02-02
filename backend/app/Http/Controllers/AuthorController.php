<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    // Display a list of authors.
    public function index()
    {
        $authors = Author::with('books')->get();

        return response()->json(['authors' => $authors]);
    }

    // Store a newly created author.
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'gender' => 'required',
            'age' => 'required|integer',
            'country' => 'required',
            'genre' => 'required',
        ]);

        $author = Author::create($request->all());

        return response()->json(['author' => $author], 201);
    }

    // Display the specified resource.
    public function show($id)
    {
        $author = Author::with('books')->find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        return response()->json(['author' => $author]);
    }

    // Edit the specified author.
    public function edit($id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        return response()->json(['author' => $author, 'debug' => 'Edit request processed']);
    }

    // Update the specified author details.
    public function update(Request $request, $id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        $this->validate($request, [
            'name' => 'required',
            'gender' => 'required',
            'age' => 'required|integer',
            'country' => 'required',
            'genre' => 'required',
        ]);

        // Instead of creating a new author, update the existing one.
        $author->update($request->all());

        return response()->json(['author' => $author]);
    }

    // Delete the specified author.
    public function destroy($id)
    {
        $author = Author::find($id);

        if (!$author) {
            return response()->json(['message' => 'Author not found'], 404);
        }

        $author->delete();

        return response()->json(['message' => 'Author deleted']);
    }
}
