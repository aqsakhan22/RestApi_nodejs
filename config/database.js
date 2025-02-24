const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize({
  database: 'db', // Replace with your RDS database name
  username: 'admin',      // Replace with your RDS master username
  password: 'aqsakhan1234',      // Replace with your RDS master password
  host: 'db.clzrdwstoy7i.ap-south-1.rds.amazonaws.com',      // Replace with your RDS endpoint
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