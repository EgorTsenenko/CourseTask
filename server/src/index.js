const express = require("express");
const cors = require("cors")

const sequelize = require("./db");
const router = require("./router");

const PORT = 3000;

const app = express();
app.use(cors())

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server has been started "http://localhost:${PORT}"`);
  });
  await sequelize.authenticate();
  await sequelize.sync({ logging: false });
};

app.use(express.json());
app.use("/api", router);

start();