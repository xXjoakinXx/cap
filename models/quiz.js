'use strict';
module.exports = (sequelize, DataTypes) => {
  var quiz = sequelize.define('quiz', {
    pregunta: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "por favor, escribe una pregunta" }
      }
    },
    respuesta: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "por favor, escribe una respuesta" }
      }
    },
    userId: {
      type: DataTypes.INTEGER
    }
  }, {
      classMethods: {
        associate: function (models) {
          //  quiz.belongsTo(models, {foreignKey: 'user'});
        }
      }
    });
  return quiz;
};
