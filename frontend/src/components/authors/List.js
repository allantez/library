import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/authors")
      .then((response) => {
        setAuthors(response.data.authors);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Authors List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Country</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
              <td>{author.gender}</td>
              <td>{author.age}</td>
              <td>{author.country}</td>
              <td>{author.genre}</td>
              <td>
                <Link to={`/authors/${author.id}`} className="btn btn-info me-2">
                  Show
                </Link>
                <Link to={`/authors/edit/${author.id}`} className="btn btn-warning">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsList;
