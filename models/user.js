'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // User.hasMany(models.Quiz);
        }
      }
    });
  return User;
};