const sequelize = require('./sequelize'); // Import the Sequelize instance
//const User = require('./models/User'); // Import the User model

// Synchronize all models with the database
sequelize.sync({ force: true }) // `force: true` will drop the table if it already exists
  .then(() => {
    console.log('All tables created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });