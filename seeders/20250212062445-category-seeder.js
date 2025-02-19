'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * **/
      await queryInterface.bulkInsert('categories', [
        {
        name: 'NodeJs',
       },
       {
        name: 'Vue Js'
       },
       {
        name: 'Dart'
       },
       {
        name: 'Javascript'
       },
       {
        name: 'Flutter Framework'
       },
       
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('categories',null,{})
  }
};
