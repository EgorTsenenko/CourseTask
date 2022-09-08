const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  "library", //db_name
  "postgres", //username
  "123", //password
  {
    dialect: "postgres",
    host: "localhost",
    port: "5432",
  }
);
