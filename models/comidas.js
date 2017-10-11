'use strict';
module.exports = (sequelize, DataTypes) => {
  var comidas = sequelize.define('comidas', {
    nombre: DataTypes.STRING,
    primerPlato: DataTypes.STRING,
    segundoPlato: DataTypes.STRING,
    postre: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comidas;
};