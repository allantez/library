import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditAuthor = () => {
  const { id } = useParams();
  const history = useHistory();

  const [author, setAuthor] = useState({
    name: "",
    gender: "",
    age: 0,
    country: "",
    genre: "",
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/authors/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.error("Error fetching author:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://127.0.0.1:8000/api/authors/${id}`, author)
      .then((response) => {
        console.log("Author updated successfully:", response.data);
        history.push("/authors"); // Redirect to the authors list page
      })
      .catch((error) => {
        console.error("Error updating author:", error);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Edit Author</h2>
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
            value={author.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            value={author.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={author.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={author.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre:
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            name="genre"
            value={author.genre}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Author
        </button>
      </form>
    </div>
  );
};

export default EditAuthor;
