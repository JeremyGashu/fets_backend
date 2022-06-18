require('dotenv').config()

const { DATABSE_USERNAME, DATABASE_PASSWORD, DATABASE, DATABSAE_HOST, DATABASE_DIALECT } = process.env

module.exports = {
  "development": {
    "username": DATABSE_USERNAME,
    "password": DATABASE_PASSWORD,
    "database": DATABASE,
    "host": DATABSAE_HOST,
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
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
       "ssl": {
         "require": true,
         "rejectUnauthorized": false
       }
     }
   }
}