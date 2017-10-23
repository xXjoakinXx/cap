var models = require('../models/models')
var Sequelize = require('sequelize');

exports.index = function (req, res) {
    res.render('listado_comidas',{created:false});
}
exports.newComida = function (req, res) {
    res.render('new-comidas');
}
exports.comoSolo = function (req, res) {
    res.render('como-solo');
}
exports.addComida = function (req, res) {

    /*console.log("Esto es lo que sale en el body -->" , req.body , "<-- Aqui acaba el body"); */
    req.body.userId = req.session.user.id;
    models.Comidas.create(req.body).then(comida => {
        res.json({ status: 201, comida: comida });
    }).catch(err => {
        res.json({ status: 500 });
    });
}
exports.borrarComida = function (req, res) {

    console.log("RENDER VISTA")
    console.log(req.params.idComida)
    models.Comidas.findById(req.params.idComida).then(function (comida) {
        comida.destroy().then(() => {
            res.redirect('/comidas');
        })

    })
}
exports.getRankingLugares = function(req,res){
    const Op = Sequelize.Op;
    models.Comidas.findAll({
        attributes: ['lugar', [Sequelize.fn('count', Sequelize.col('Comidas.lugar')), 'numero']],
        group:['Comidas.lugar'],
        where: {
            $and: [
                Sequelize.where(
                    Sequelize.fn('DATE', Sequelize.col('comidas.createdAt')),
                    Sequelize.literal('CURRENT_DATE')
                )
            ]
        }
    }).then(function (comidas) {
        res.json(comidas);
    });

}
exports.getJsonComidas = function (req, res) {

    const Op = Sequelize.Op;
    models.Comidas.findAll({
        include:[models.User],
        where: {
            $and: [
                Sequelize.where(
                    Sequelize.fn('DATE', Sequelize.col('comidas.createdAt')),
                    Sequelize.literal('CURRENT_DATE')
                )
            ]
        }
        //SELECT *.comidas where DATE(comidas.createdAto) == CURRENT_DATE 
        
        //ESTE CODIGO MUESTRA TODAS LAS COMIDAS DE LAS ULTIMAS 24 HORAS. COSA QUE NO QUEREMOS
        // where: {
        //     createdAt: {
        //         [Op.lt]: new Date(),
        //         [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000) //dia anterior
        //       }
        // }
    }).then(function (comidas) {
        res.json(comidas);
    });


}
