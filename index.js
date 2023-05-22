require("dotenv").config();
const express = require("express");
const app = express();
const update = require("./src/update");

app.use(express.json());

app.use("/", update);

const port = 3000;
app.listen(port, () => {
  console.log(`🚀 Working on port ${port}`);
});
