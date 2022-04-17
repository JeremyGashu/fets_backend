'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.belongsTo(models.company, { foreignKey: 'company_id', onDelete: 'CASCADE' })
      users.hasMany(models.notification, { foreignKey: 'user_id' })
      // users.hasMany(models.notification)
    }
  }
  users.init({

    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address : {
      type : DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue : false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};