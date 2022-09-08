const { Sequelize } = require("sequelize");

module.exports = new Sequelize("library", "postgres", "123", {
  dialect: "postgres",
  host: "localhost",
  port: "5432",
});
