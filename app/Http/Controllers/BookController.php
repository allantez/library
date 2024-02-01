<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    // Display a listof books.
    public function index()
    {
        $books = Book::with('author')->get();

        return response()->json(['books' => $books]);
    }

    // Store a newly created book.
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'isbn' => 'required',
            'author_id' => 'required|exists:authors,id',
        ]);

        $book = Book::create($request->all());

        return response()->json(['book' => $book], 201);
    }

    // Display the specified book.
    public function show($id)
    {
        $book = Book::with('author')->find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        return response()->json(['book' => $book]);
    }

    // Update the specified book.
    public function update(Request $request, $id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $this->validate($request, [
            'name' => 'required',
            'isbn' => 'required',
            'author_id' => 'required|exists:authors,id',
        ]);

        $book->update($request->all());

        return response()->json(['book' => $book]);
    }

    // Delete the specified book.
    public function destroy($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        $book->delete();

        return response()->json(['message' => 'Book deleted']);
    }
}
