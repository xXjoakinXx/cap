'use strict';
module.exports = (sequelize, DataTypes) => {
  var Personajes = sequelize.define('Personajes', {
    userId: DataTypes.INTEGER,
    frase: DataTypes.STRING,
    votos: DataTypes.INTEGER,
    rondaId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Personajes;
};