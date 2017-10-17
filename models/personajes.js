'use strict';
module.exports = (sequelize, DataTypes) => {
  var Personajes = sequelize.define('Personajes', {
    frase: DataTypes.STRING,
    votos: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Personajes;
};