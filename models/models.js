var path = require('path');
var Sequelize = require('sequelize');

const sequelize = new Sequelize(null, null, null, {
    dialect: 'sqlite',
    storage: 'quiz.sqlite'
});

var Comidas = sequelize.import(path.join(__dirname, 'comidas'));
var User = sequelize.import(path.join(__dirname, 'user'));
var Personajes = sequelize.import(path.join(__dirname, 'personajes'));
var Votos = sequelize.import(path.join(__dirname, 'votos'));
var Rondas = sequelize.import(path.join(__dirname, 'rondas'));

// 1-a-N Comidas y Usuarios
User.hasMany(Comidas);
Comidas.belongsTo(User);

// 1-a-N Personajes y Usuarios
User.hasMany(Personajes);
Personajes.belongsTo(User);
Personajes.hasMany(Votos);

//1 a N Votos y Usuarios
User.hasMany(Votos);
Votos.belongsTo(User);
Votos.belongsTo(Personajes);




exports.Comidas = Comidas;
exports.User = User;
exports.Personajes = Personajes;
exports.Votos = Votos;
exports.Rondas= Rondas;

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