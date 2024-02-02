import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreateBook = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    isbn: "",
    author_id: "",
  });

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    // Fetch authors for populating the select input
    axios
      .get("http://127.0.0.1:8000/api/authors")
      .then((response) => {
        setAuthors(response.data.authors);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new book
    axios
      .post("http://127.0.0.1:8000/api/books", formData)
      .then((response) => {
        console.log("Book created successfully:", response.data);
        history.push("/books");
      })
      .catch((error) => {
        console.error("Error creating book:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">
            ISBN:
          </label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            name="isbn"
            value={formData.isbn}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author_id" className="form-label">
            Author:
          </label>
          <select
            className="form-control"
            id="author_id"
            name="author_id"
            value={formData.author_id}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select an author
            </option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Book
        </button>
      </form>
    </div>
  );
};

export default CreateBook;
