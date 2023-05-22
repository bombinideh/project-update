require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

const updateRoute = require("./src/update");

app.use(updateRoute);

module.exports = { app, knex };

app.listen(port, () => {
  console.log(`🚀 Working on port ${port}`);
});
