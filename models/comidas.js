'use strict';
module.exports = (sequelize, DataTypes) => {
  var comidas = sequelize.define('comidas', {
    nombre: DataTypes.STRING,
    primerPlato: DataTypes.STRING,
    segundoPlato: DataTypes.STRING,
    postre: DataTypes.STRING,
    bebida: DataTypes.STRING,
    lugar: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comidas;
};