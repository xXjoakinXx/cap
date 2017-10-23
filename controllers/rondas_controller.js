var models = require('../models/models')
var Sequelize = require('sequelize');

exports.getRondasJson = function (req, res) {

    models.Rondas.findAll().then(function (rondas) {
        return res.json(rondas)
    })

}
exports.showganadores = function(req,res){
    res.render('ganadores');
}

