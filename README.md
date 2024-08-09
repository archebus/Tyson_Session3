# Book Review Platform

## Project Overview

This project is a simple book review platform built with Node.js, Express, Sequelize, and MySQL. It includes a static HTML frontend to interact with the backend API. The application allows users to add books, view book details, and submit reviews for books. 

### Features
- **Add Books**: Create new book entries in the database.
- **View Books**: List all books with details.
- **Add Reviews**: Submit reviews for selected books.
- **View Reviews**: Display reviews for a selected book.

## Specific Homework

- **ORM with Sequelize**: Implement ORM with Sequelize for at least 3 types of entities (Books, Reviews).
- **CRUD Routes**: Create routes for create, retrieve, update, and delete operations.
- **Frontend**: Develop a static HTML frontend to interact with the backend API.

## Stretch/Extension Tasks

- **Database Persistence**: Ensure database persistence with `.sync()` method in Sequelize. This maintains database schema changes.
- **Development Importance**: Understand the necessity of persistence during development for maintaining data integrity and avoiding data loss.
- **Project Restructuring**: Organize the project structure to include a dedicated `models` folder.
- **Impressive Feature**: Implement an additional impressive feature or enhancement.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/book-review-platform.git
   cd book-review-platform

2. **Install Dependencies**

    ```bash
    npm install

3. **Set Up the Database**

    Run the SQL script to set up the database and user:
    ```bash
    npm run setup

4. **Create and Migrate the Database**

    ```bash
    npm run db:create
    npm run db:migrate


5. **Seed the Database (Optional)**

    You can pre-populate the database with 3 books if you wish.
    ```bash
    npm run db:seed

6. **Start the Server**

    ```bash
    npm start

7. **Access the Application**

    Open your browser and navigate to http://localhost:3001.

## Project Structure

* server.js: Main server file.
* models/: Sequelize models.
* routes/: API routes.
* public/: Static files (HTML, CSS, JS).
* config/: Sequelize configuration.
* migrations/: Database migrations.
* seeders/: Seed data for the database.

## Dependencies

* express: Web framework for Node.js.
* cors: Middleware for handling CORS.
* sequelize: ORM for MySQL.
* mysql2: MySQL driver.

## License

This project is licensed under the MIT License.