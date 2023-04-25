const Pool = require("pg").Pool;

const pool = new Pool ({
  user: "postgres", //using the postgres user
  password: "postgres", //input postgres password
  host: "localhost",
  port: 5432,
  database: "perntodo" // database name here
});

module.exports = pool;