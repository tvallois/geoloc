const { Pool } = require('pg');
const config = require('../config.json');

// Database connection
const pool = new Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback)
}
