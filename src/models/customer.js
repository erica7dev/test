'use strict'
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize_config');

class Customer extends Model {
  static associate(models) {}
};

Customer.init({
  idUser: DataTypes.INTEGER,
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  description: DataTypes.STRING,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, { sequelize, modelName: 'Customer' });

module.exports = Customer;