import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";

import AuthorsList from "./components/authors/List";
import BooksList from "./components/books/List";

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/authors" element={<AuthorsList />} />
        <Route path="/books" element={<BooksList />} />
      </Routes>
    </Router>
  );
}

export default App;
