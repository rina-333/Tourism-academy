'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      username: 'adminAPB@',
      password: '$2a$08$.X/BEcw7NW9JLbC8F6Uaa.VhelkidzF0rt191JBNcyg1GUrozu6W2',
      createdAt: new Date(),
      updatedAt: new Date()
    }],
    {
      validate: true, 
      individualHooks: true,
    }
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
