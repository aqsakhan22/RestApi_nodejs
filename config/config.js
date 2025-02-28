// config.js
require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';
console.log(`ENV DETAILS is ${process.env.NODE_ENV}`);
const development = {
  username: process.env.DB_DEVELOPMENT_USER,
  password: process.env.DB_DEVELOPMENT_PASSWORD,
  database: process.env.DB_DEVELOPMENT_NAME,
  host: process.env.DB_DEVELOPMENT_HOST,
  port: process.env.DB_DEVELOPMENT_PORT,
  dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql'
};

const production = {
  username: process.env.DB_PRODUCTION_USER,
  password: process.env.DB_PRODUCTION_PASSWORD,
  database: process.env.DB_PRODUCTION_NAME,
  host: process.env.DB_PRODUCTION_HOST,
  port: process.env.DB_PRODUCTION_PORT,
  dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql'
};

const config = {
  development,
  production,
};

module.exports = config[env];