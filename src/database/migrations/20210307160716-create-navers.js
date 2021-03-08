'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('navers', {
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
      job_role: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      birth_date: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      admission_date: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }, {
      schema: 'nave',
      tableName: 'navers'
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('navers', {
      schema: 'nave',
      tableName: 'navers'
    });

  }
};
