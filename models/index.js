const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env]; // Import config
//console(`database is  ${config.username}`);
 // Set environment
// const dbConfig = config[env] || config.default; // Use the correct config
// console.log(`environment is env ${config[env]} ${env} ${dbConfig}`);

//console.log(`env config is ${config.username}`);
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
