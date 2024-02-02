import React from 'react';

const Home = () => {
  return (
    <div className="container mt-4">
      <h2>Welcome to Your Library Management System</h2>
      <p>
        This is a simple web application to manage a list of books and authors.
      </p>
      <p>
        Explore the <a href="/authors">Authors</a> and <a href="/books">Books</a> sections.
      </p>
    </div>
  );
};

export default Home;
