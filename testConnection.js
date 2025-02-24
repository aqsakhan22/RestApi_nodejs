const sequelize = require('./config/database');

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