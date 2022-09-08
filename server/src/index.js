const express = require("express");

const sequelize = require("./db");

const PORT = 3000;

const app = express();

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server has been started "http://localhost:${PORT}"`);
  });
  await sequelize.authenticate();
  await sequelize.sync({ logging: false });
};

app.use("api", router);

await start();
