'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    let products = [];

    for (let i = 1; i <= 20; i++) {
      products.push({ id: i, name: `produto ${i}` })
    }

    await queryInterface.bulkInsert('products', products, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});

  }
};
