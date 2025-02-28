//
//const sequelize = require('./config/database');
const sequelize = require('./sequelize');

//require('dotenv').config();

//console.log(`removing environment Data is env ${process.env.DB_HOST} ${process.env.DB_USER} ${process.env.DB_NAME}`);

async function testConnection() {
  console.log("testConnection");
  try {
    await sequelize.authenticate();
    console.log('Connection to RDS MySQL database has been established successfully.');
  } catch (error) {
    console.log("**********");
    console.log(error);
    //console.error('Unable to connect to the database:', error);
  }
}

testConnection();