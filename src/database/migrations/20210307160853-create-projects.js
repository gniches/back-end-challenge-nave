'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,        
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      schema: 'nave',
      tableName: 'projects'
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects', {
      schema: 'nave',
      tableName: 'projects'
    });

  }
};
