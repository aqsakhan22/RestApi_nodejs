// sequelize.js
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');

console.log(`username ${config.username} ${config.database} ${config.password}`);
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: "mysql",
    logging: false, // Disable logging for cleaner output
  }
);

module.exports = sequelize;