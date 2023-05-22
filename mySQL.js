const knex = require("knex");

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

connection
  .raw("SELECT 1+1 AS result")
  .then(() => {
    console.log("Conectado ao banco de dados MySQL");
  })
  .catch((err) => {
    console.exit(1);
  });
