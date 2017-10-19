'use strict';
module.exports = (sequelize, DataTypes) => {
  var rondas = sequelize.define('rondas', {
    nombre: DataTypes.STRING,
    fechaFin: DataTypes.DATE(6) 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return rondas;
};