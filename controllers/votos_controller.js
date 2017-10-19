var models = require('../models/models')

exports.votos = function (req, res) {
    res.json({ status: 201 });
}

//POST /personajes/:personajesId
exports.votar = function (req, res, next) {
    console.log("ID RONDA A VOTAR" + req.body.rondaId);
    //obtenemos todos los votos del usuario logueado
    models.Votos.findAll({
        include: [{ all: true }],
        where: { UserId: req.session.user.id }
    }).then(function (votos) {
        //recorremos los votos
        for (var i = 0; i < votos.length; i++) {
            //si el voto pertenece a la ronda que queremos votar abortamos
            // console.log("ID RONDA" + votos[i].Personaje.rondaId);
            if (votos[i].Personaje.rondaId == req.body.rondaId) {
                res.json({ estado: "false" }); //TERMINAMOS EJECUCION
            }
        }
        //sino creamos el voto
        models.Votos.create({
            PersonajeId: req.params.personajeId,
            UserId: req.session.user.id
        }).then(function (est) {
            if (est) {
                next();
            } else {
                res.json({ estado: "false" });
            }
        });

    });
}