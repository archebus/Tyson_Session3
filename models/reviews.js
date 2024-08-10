'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {

    static associate( { Books }) {
      this.belongsTo(Books, { foreignKey: 'book_id'});
    }

  }
  Reviews.init({
    rid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'books',
        key: 'bid'
      },
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Reviews',
    tableName: 'reviews',
    timestamps: true
  });
  
  return Reviews;
  
};