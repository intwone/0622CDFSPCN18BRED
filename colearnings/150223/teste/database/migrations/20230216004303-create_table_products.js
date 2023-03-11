'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('products', {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');

  }
};
