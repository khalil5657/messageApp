const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM testusernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query(`INSERT INTO testusernames (username) VALUES (${username})`);
}

module.exports = {
  getAllUsernames,
  insertUsername
};