var models = require('../models/models')
var Sequelize = require('sequelize');

exports.index = function (req, res) {
    res.render('admin/panelAdmin', { layout: 'admin/panelAdmin' });
}

exports.createFrase = function (req, res) {
    res.render('admin/createFrase', { layout: 'admin/createFrase' });
}

exports.addFrase = function (req, res) {

    console.log(req.body)
    models.Personajes.create(req.body).then(function (personaje) {
        res.json(personaje)
    }).catch(function () {
        res.json({ status: 500, message: "error. contacte con el administrador del sistema" })
    })

}

exports.createRonda = function (req, res) {
    res.render('admin/createRonda', { layout: 'admin/createRonda' });
}

exports.getRondasJson = function (req, res) {

    const Op = Sequelize.Op;
    //formamos el filtro en funcion de los parametos
    if (req.query.finalizadas) {
        filtro = { fechaFin: { [Op.lt]: new Date() } }
    } else if (req.query.pendientes) {
        filtro = { fechaFin: { [Op.gt]: new Date() } }
    } else {
        filtro = {}
    }

    models.Rondas.findAll({
        include: [{
            model: models.Personajes,
            include: [{
                model: models.User,
            }],
        }],
        order: [
            ['fechaFin', 'DESC'],
            [models.Personajes, 'votos', 'DESC'],
        ],
        where: filtro
    }).then(function (rondas) {
        res.json(rondas)
    })
}

exports.addRonda = function (req, res) {

    models.Rondas.create(req.body).then(function (ronda) {
        res.render('admin/createRonda', { message: "Ronda creada correctamente" });
    }).catch(function (err) {
        res.json(err)
    })

}

//POST /admin/ronda/poblate
exports.poblateRonda = function (req, res) {

    var i;
    for ( i=0; i<10; i++){
        models.Rondas.create({
            nombre: "prueba " + i,
            fechaFin: new Date()
        }).then(function (ronda) {
            var j;
            for (var j = 0; j < 5000; j++) {
               models.Personajes.create({
                   frase: "Frase " + j,
                   userId: req.session.user.id,
                   rondaId: ronda.id,
                   votos: 0
               }).then(function(pers){
                   /* if(i == 9 && j == 4999){
                       res.render("/admin");
                   } */
/*                 console.log("Creado personaje: " + pers.id);
 */               })
            }
/*             console.log("Creada ronda: " + ronda.id);
 */        });
    }
}