import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ShowBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/books/${id}`)
      .then((response) => {
        setBook(response.data.book);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  if (!book) {
    return (
      <div className="container mt-4">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>{book.name}</h2>
      <p>
        <strong>ID:</strong> {book.id}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p>
        <strong>Author:</strong> {book.author_name}
      </p>{" "}
      {/* Assuming you have an 'author_name' field in your API response */}
      <div>
        <Link to={`/books/edit/${book.id}`} className="btn btn-warning mr-2">
          Edit
        </Link>
        {/* You can add additional actions or buttons here as needed */}
      </div>
    </div>
  );
};

export default ShowBook;
