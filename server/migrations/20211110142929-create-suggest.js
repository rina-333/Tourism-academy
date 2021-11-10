'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Suggests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_suggest: {
        type: Sequelize.STRING
      },
      suggest: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email_suggest: {
        allowNull: false,
        unique:true,
        type: Sequelize.STRING
      },
      date_suggest: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Suggests');
  }
};