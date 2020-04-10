
require('dotenv').config();

module.exports = {
  "development": {
    "database": process.env.DB1NAME,
    "username": process.env.DB1USER,
    "password":  process.env.DB1PASS,
    "host": process.env.DB1HOST,
    "port": process.env.DB1PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};
