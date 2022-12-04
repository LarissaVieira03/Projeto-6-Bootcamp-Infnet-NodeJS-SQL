'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Tiago Silva',
      username: 'tiagoluizrs',
      email: 'tiagoluizrs@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      birthday: new Date(1995, 6, 27),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    
  }
};
