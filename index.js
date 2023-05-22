require("dotenv").config();
const app = require("./app");
const port = 3000;

const updateRoute = require("./src/update");

app.use(updateRoute);

module.exports = app;

app.listen(port, () => {
  console.log(`🚀 Working on port ${port}`);
});
