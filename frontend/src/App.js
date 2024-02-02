import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import AuthorsList from './components/authors/List';
import BooksList from './components/books/List';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authors" element={<AuthorsList />} />
            <Route path="/books" element={<BooksList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
