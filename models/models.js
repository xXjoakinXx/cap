var path = require('path');
var Sequelize = require('sequelize');

const sequelize = new Sequelize(null, null, null, {
    dialect: 'sqlite',
    storage: 'quiz.sqlite'
});

var Quiz = sequelize.import(path.join(__dirname, 'quiz'));
var User = sequelize.import(path.join(__dirname, 'user'));

User.hasMany(Quiz);
Quiz.belongsTo(User);

exports.Quiz = Quiz;
exports.User = User;

// //crea e instancia la tabla de preguntas
// sequelize.sync().then(function () {

//     Quiz.count().then(function (count) {
//         if (count == 0) {
//             Quiz.create({
//                 pregunta: 'Capital de Italia',
//                 respuesta: 'Roma'
//             }).then(function () {
//                 console.log('BASE DE DATOS CREADA CORRECTAAMENTE');
//             });
//         }
//     });

// })

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });