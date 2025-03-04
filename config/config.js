require('dotenv').config(); // If using environment variables

module.exports = {
  development: {
    username: process.env.DB_DEVELOPMENT_USER,
    password: process.env.DB_DEVELOPMENT_PASSWORD ,
    database: process.env.DB_DEVELOPMENT_NAME,
    host: process.env.DB_DEVELOPMENT_HOST,
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_PRODUCTION_USER,
    password: process.env.DB_PRODUCTION_PASSWORD,
    database: process.env.DB_PRODUCTION_NAME,
    host: process.env.DB_PRODUCTION_HOST,
    dialect: 'mysql'
  },
  default: {
    username: process.env.DB_DEVELOPMENT_USER,
    password: process.env.DB_DEVELOPMENT_PASSWORD,
    database: process.env.DB_DEVELOPMENT_NAME,
    host: process.env.DB_DEVELOPMENT_HOST,
    dialect: 'mysql'
  }
};
