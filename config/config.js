require('dotenv').config()

const { DATABSE_USERNAME, DATABASE_PASSWORD, DATABASE, DATABASE_HOST, DATABASE_DIALECT } = process.env

module.exports = {
  "development": {
    "username": DATABSE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": DATABASE,
    "host": DATABASE_HOST,
    "dialect": DATABASE_DIALECT
  },
  "test": {
    "username": "postgres",
    "password": "1234",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": DATABSE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": DATABASE,
    "host": DATABASE_HOST,
    "dialect": DATABASE_DIALECT,
    ssl: true,
    dialectOptions: {
      ssl: {      /* <----- Add SSL option */
        require: true,
        rejectUnauthorized: false
      }
    },
  }
}