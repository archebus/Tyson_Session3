// Dependencies
const express = require('express');
const cors = require('cors'); 
const { sequelize, Books, Reviews } = require('./models');
const path = require('path');
const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/reviews');

// Express Port
const port = 3001;

// Express Start
const app = express();
app.use(express.json());
app.use(cors());

// Static HTML from public
app.use(express.static(path.join(__dirname, 'public')));

// App use defined routes
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

// Main Listen Call
app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    
    // Sync database models
    await sequelize.sync({ alter: true });
    console.log('Database synced!');
    console.log(`Server up on http://localhost:${port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
