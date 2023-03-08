'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('books', 'country_code', {
      type: Sequelize.STRING(3),
      after: "stock"
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('books', 'country_code');

  }
};
