'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_navers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
        project_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'projects',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        naver_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'navers',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
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
      tableName: 'project_navers'
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_navers', {
      schema: 'nave',
      tableName: 'project_navers'
    });
    
  }
};
