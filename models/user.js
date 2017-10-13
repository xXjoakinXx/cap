'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return User;
};