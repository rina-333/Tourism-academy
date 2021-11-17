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
      desc_suggest: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      email_suggest: {
        unique:true,
        type: Sequelize.STRING
      },
      date_suggest: {
        allowNull: false,
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