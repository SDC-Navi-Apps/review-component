
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
    "database": process.env.DBNAME,
    "username": process.env.DBUSER,
    "password":  process.env.DBPASS,
    "host": process.env.DBHOST,
    "port": process.env.DBPORT,
    "dialect": "postgres",
    "pool": {
      "max": 20,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  }
};
