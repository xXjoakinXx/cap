var models = require('../models/models')
var Sequelize = require('sequelize');


exports.personajes = function (req, res) {
    res.render('../public/templates/login');

}

//GET /personajes
exports.get = function (req, res) {

    models.Personajes.findAll({
        include: [{ model: models.User }]
    }).then(function (pers) {
        if (pers) {
            res.json(pers);
        } else {
            console.log("ERROR AL RECUPERAR PERSONAJES");
            next(new Error('Base de datos vacía de personajes'));
        }
    });
}

exports.getPersonajesByRonda = function (req, res) {
        models.Personajes.findAll({
            where: {
               rondaId: req.params.rondaId
            },
            include: [{ model: models.User }]
        }).then(function (pers) {
            if (pers) {
                res.json(pers);
            } else {
                console.log("ERROR AL RECUPERAR PERSONAJES");
                next(new Error('Base de datos vacía de personajes'));
            }
        });
    }
    

//POST /personajes/:personajesId
exports.votar = function (req, res) {
    models.Personajes.findById(req.params.personajesId).then(function(result){
        if(result){
            result.updateAttributes({
              votos: req.body.votos
            }).then(function(err){
              console.log("actualización aceptada");
              res.json({ estado: "true" });
            }).catch(function(err){
              console.log("actualización denegada");
              res.json({ estado: "false" });
            });
          }
    });
}
