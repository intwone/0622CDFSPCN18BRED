'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', "adress", {
      type: Sequelize.STRING,
      after: "username"
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('adress');

  }
};
