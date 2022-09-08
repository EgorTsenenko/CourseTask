const db = require("./db");
const { DataTypes } = require("sequelize");

const Author = db.define("author", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastName: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
});

const Book = db.define("book", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.REAL },
  authorId: {
    type: DataTypes.INTEGER,
    references: { model: Author, key: "id" },
  },
});

Author.hasMany(Book);
Book.belongsTo(Author);

module.exports = {
  Author,
  Book,
};
