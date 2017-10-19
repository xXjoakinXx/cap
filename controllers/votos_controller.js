var models = require('../models/models')

exports.votos = function(req,res){
    res.json({status:201});
}


//POST /personajes/:personajesId
exports.votar = function(req, res, next){
    models.Votos.findAll({
        where: { UserId: req.session.user.id},
    }).then(function(result){
        /* console.log(result); */
        if(result){
            res.json({estado: "false"});
        }else{
            models.Votos.create({
                PersonajeId: req.params.personajesId,
                UserId: req.session.user.id
            }).then(function(est){
                if(est){
                    next();
                }else{
                    res.json({estado: "false"});
                }
            });
        }
    });
}