'use strict';

const { Sequelize } = require('sequelize');

const fs = require('fs');

//production
let config  = {
  'username': process.env.USER,
  'password': process.env.PASSWORD,
  'database': process.env.DATABASE,
  'host': process.env.HOST,
  'dialect': 'mysql',
}

let sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;