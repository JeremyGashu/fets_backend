const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize({ ...config.development, logging: console.log, })
exports.database = sequelize