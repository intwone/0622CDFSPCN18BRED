'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      title: {
        type: Sequelize.STRING(200),
        allowNull: false
      },

      total_pages: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      },

      author: {
        type: Sequelize.STRING(200),
        allowNull: false
      },

      release_year: {
        type: Sequelize.STRING(50),
        allowNull: false
      },

      stock: {
        type: Sequelize.INTEGER(10),
        allowNull: false
      },

      createdAt: Sequelize.DATE,

      updatedAt: Sequelize.DATE,

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('books');

  }
};
