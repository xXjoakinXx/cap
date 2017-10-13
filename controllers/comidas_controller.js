var models = require('../models/models')
var Sequelize = require('sequelize');

exports.index = function (req, res) {

    const Op = Sequelize.Op;
    models.Comidas.findAll({
        where: {
            $and: [
                Sequelize.where(
                    Sequelize.fn('DATE', Sequelize.col('createdAt')),
                    Sequelize.literal('CURRENT_DATE')
                )
            ]
        }
        //ESTE CODIGO MUESTRA TODAS LAS COMIDAS DE LAS ULTIMAS 24 HORAS. COSA QUE NO QUEREMOS
        // where: {
        //     createdAt: {
        //         [Op.lt]: new Date(),
        //         [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000) //dia anterior
        //       }
        // }
    }).then(function (comidas) {
        // res.json(comidas);
        res.render('listado_comidas', { comidas: comidas });
    });

}