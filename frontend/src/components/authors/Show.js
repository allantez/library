import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowAuthor = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/authors/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.error("Error fetching author details:", error);
      });
  }, [id]);

  if (!author) {
    return <div>Loading...</div>; // You can customize the loading state
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Author Details</h2>
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <strong>ID:</strong> {author.id}
          </div>
          <div className="mb-3">
            <strong>Name:</strong> {author.name}
          </div>
          <div className="mb-3">
            <strong>Gender:</strong> {author.gender}
          </div>
          <div className="mb-3">
            <strong>Age:</strong> {author.age}
          </div>
          <div className="mb-3">
            <strong>Country:</strong> {author.country}
          </div>
          <div className="mb-3">
            <strong>Genre:</strong> {author.genre}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAuthor;
