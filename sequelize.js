// sequelize.js
const { Sequelize } = require('sequelize');
const config = require('./config/config.js');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false, // Disable logging for cleaner output
  }
);

module.exports = sequelize;