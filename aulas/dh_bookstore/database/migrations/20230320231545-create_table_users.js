'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false
      },

      nickname: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.STRING(200),
        allowNull: false
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');

  }
};
