'use strict';
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [];

    for (let i = 1; i <= 5; i++) {
      users.push({
        id: i,
        name: faker.name.fullName(),
        email: faker.internet.email().toLowerCase(),
        nickname: faker.internet.userName().toLowerCase(),
        password: bcrypt.hashSync('123456', 10),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    await queryInterface.bulkInsert('users', users, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
