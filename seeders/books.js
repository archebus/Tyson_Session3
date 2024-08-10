'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        published_date: new Date('1925-04-10'),
        genre: 'Novel',
        description: 'A novel about the American dream and the jazz age.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published_date: new Date('1960-07-11'),
        genre: 'Southern Gothic',
        description: 'A novel about racial injustice in the Deep South.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '1984',
        author: 'George Orwell',
        published_date: new Date('1949-06-08'),
        genre: 'Dystopian',
        description: 'A novel depicting a totalitarian society under constant surveillance.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};