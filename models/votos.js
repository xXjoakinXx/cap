'use strict';
module.exports = (sequelize, DataTypes) => {
  var Votos = sequelize.define('Votos', {
    PersonajeId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Votos;
};