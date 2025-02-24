const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize({
  database: 'your_database_name', // Replace with your RDS database name
  username: 'your_username',      // Replace with your RDS master username
  password: 'your_password',      // Replace with your RDS master password
  host: 'your_rds_endpoint',      // Replace with your RDS endpoint
  port: 3306,                     // Default MySQL port
  dialect: 'mysql',                // Specify the dialect (MySQL)
  dialectModule: require('mysql2'), // Use mysql2 as the dialect module
  logging: console.log,            // Enable logging (optional)
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;