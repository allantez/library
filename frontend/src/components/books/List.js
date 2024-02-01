import React, { useState, useEffect } from "react";
import axios from "axios";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/books")
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div>
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} - {book.isbn}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
