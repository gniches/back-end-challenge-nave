'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('nave');
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('nave');
    
  }
};
