'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('project_navers', {
        project_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'projects',
            key: 'id',
          }
        },
        naver_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'navers',
            key: 'id',
          }
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
