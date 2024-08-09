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

module.exports = router;