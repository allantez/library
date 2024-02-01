import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthorsList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((response) => {
        setAuthors(response.data.authors);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
      });
  }, []);

  return (
    <div>
      <h2>Authors List</h2>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorsList;
