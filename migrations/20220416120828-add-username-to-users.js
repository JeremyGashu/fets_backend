'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn(
      'users',
      'username',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'username')
  }
};
