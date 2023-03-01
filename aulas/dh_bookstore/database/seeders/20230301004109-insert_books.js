'use strict';

const colectionBooks = require('../old/db');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('books', colectionBooks, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});

  }
};
