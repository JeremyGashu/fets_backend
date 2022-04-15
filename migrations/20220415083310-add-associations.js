'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users', // name of Source model
      'company_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'companies', // name of Target model
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    ).then(() => {
      return queryInterface.addColumn(
        'notifications', // name of Source model
        'user_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'users', // name of Target model
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      )
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'users', // name of Source model
      'company_id' // key we want to remove
    ).then(() => {
      return queryInterface.removeColumn(
        'notification',
        'user_id'
      )
    });
  }
};
