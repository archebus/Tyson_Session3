const express = require('express');
const router = express.Router();
const { Books, Reviews } = require('../models');

// Create a new review
router.post('/', async (req, res) => {
  const { book_id, rating, comment } = req.body;

  try {
    const book = await Books.findOne({ where: { bid: book_id }});
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    const review = await Reviews.create({ book_id: book.bid, rating, comment });
    return res.json(review);
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).json({ error: 'An error occurred', details: err.message });
  }
});

// Get all reviews or reviews for a specific book
router.get('/', async (req, res) => {
  const { book_id } = req.query;

  try {
    let reviews;
    if (book_id) {
      reviews = await Reviews.findAll({
        where: { book_id },
        include: [Books]
      });
    } else {
      reviews = await Reviews.findAll({ include: [Books] });
    }
    return res.json(reviews);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
