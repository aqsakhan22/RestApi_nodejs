const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log(`environmentData is ${process.env.DB_HOST} ${process.env.DB_USER}`);
const sequelize = new Sequelize({
  database: process.env.DB_NAME, // Replace with your RDS database name
  username: process.env.DB_USER,      // Replace with your RDS master username
  password: process.env.DB_PASSWORD,      // Replace with your RDS master password
  host: process.env.DB_HOST,      // Replace with your RDS endpoint
  port: 3306,                     // Default MySQL port
  dialect: 'mysql',                // Specify the dialect (MySQL)
  dialectModule: require('mysql2'),
  dialectOptions: { //< Add this
    ssl: {
       require: true,
       rejectUnauthorized: false
    }
 }, // Use mysql2 as the dialect module
  logging: console.log,            // Enable logging (optional)
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;