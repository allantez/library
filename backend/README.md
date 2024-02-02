# Library Management System - Backend

This is the backend repository for the Library Management System, a web application to manage a list of books and authors.

## Features

- RESTful API for managing authors and books
- CRUD operations for authors and books
- Data validation and error handling
- Integration with a relational database

## Installation

1. Clone the repository:

   ```bash
   - git clone https://github.com/allantez/library.git

2. Navigate to the project directory:
   ```bash
   - cd backend

3. Install dependencies:
   ```bash
   - composer install

4. Copy the example environment file and configure the database:
   ```bash
   - cp .env.example .env
   - Update the .env file with your database configuration.

5. Generate the application key:
   ```bash
   - php artisan key:generate
  
6. Run the database migrations:
   ```bash
   - php artisan migrate
  
7. Start the development server:
   ```bash
   - php artisan serve
  
8. API Endpoints
   - GET /api/authors: Get a list of all authors.
   - POST /api/authors: Create a new author.
   - GET /api/authors/{id}: Get details of a specific author.
   - PUT /api/authors/{id}: Update details of a specific author.
   - DELETE /api/authors/{id}: Delete a specific author.
   - GET /api/books: Get a list of all books.
   - POST /api/books: Create a new book.
   - GET /api/books/{id}: Get details of a specific book.
   - PUT /api/books/{id}: Update details of a specific book.
   - DELETE /api/books/{id}: Delete a specific book.

  # Database
  - The application uses a MySQL database to store author and book information.

# Technologies Used
- Laravel
- MySQL
- Composer
