// const {Client } = require("pg")
// const client = new Client({
//     host: "localhost",
//     user:"postgres",
//     port:5432,
//     password:"tetouan001215",
//     database:"postgres"
// })

// client.connect();
// client.query("select * from ")

const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: "postgresql://postgres:tetouan001215@localhost:5432/postgres"
});