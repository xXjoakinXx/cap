'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('quizzes', [{
      pregunta: 'Capital de españa',
      respuesta: 'Madrid'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('quizzes', null, {});
  }
};
