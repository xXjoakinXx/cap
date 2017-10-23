var models = require('../models/models')

exports.votos = function (req, res) {
    res.json({ status: 201 });
}


 function _puedeVotar (votos,rondaId) {

    var puedeVotar = true;
    for (var i = 0; i < votos.length; i++) {
        //si el voto pertenece a la ronda que queremos votar abortamos
        if (votos[i].Personaje.rondaId == rondaId) {
            puedeVotar=false;
            break;
        }
    }
    return puedeVotar;

}
//POST /personajes/:personajesId
exports.votar = function (req, res, next) {
    var votoDenegado = false;
    //obtenemos todos los votos del usuario logueado
    models.Votos.findAll({
        include: [{ all: true }],
        where: { UserId: req.session.user.id }
    }).then(function (votos) {
        //recorremos los votos
        if (_puedeVotar(votos,req.body.rondaId)) {
            //sino creamos el voto
            models.Votos.create({
                PersonajeId: req.params.personajeId,
                UserId: req.session.user.id
            }).then(function (est) {
                if (est) {
                    next();
                } else {
                    votoDenegado = true; //TERMINAMOS EJECUCION
                }
            });
        } else {
            return res.json({ estado: "false" });
        }


    });
}