const express = require('express');
const router = express.Router();
const { Books } = require('../models');

// Create a new book
router.post('/', async (req, res) => {
  const { title, author, published_date, genre, description } = req.body;

  try {
    const book = await Books.create({ title, author, published_date, genre, description });
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Books.findAll();
    return res.json(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// Get a book by ID
router.get('/:id', async (req, res) => {
  const bid = req.params.id;
  try {
    const book = await Books.findOne({ where: { bid } });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

// Remove a book
router.delete('/:id', async (req, res) => {
  const bid = req.params.id;

  try {
    const book = await Books.destroy({ where: { bid }});
    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  const bid = req.params.id;
  const { title, author, published_date, genre, description } = req.body;

  try {
    // Find the book by its ID
    const book = await Books.findOne({ where: { bid } });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Update the book with the new data
    book.title = title;
    book.author = author;
    book.published_date = published_date;
    book.genre = genre;
    book.description = description;

    // Save the updated book to the database
    await book.save();

    return res.json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;