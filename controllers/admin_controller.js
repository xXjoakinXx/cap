var models = require('../models/models')
var Sequelize = require('sequelize');

exports.index = function (req, res) {
    res.render('admin/panelAdmin');
}
exports.createFrase = function (req, res) {
    res.render('admin/createFrase');
}
exports.addFrase = function(req,res){

    console.log(req.body)
    models.Personajes.create(req.body).then(function(personaje){
        res.json(personaje)
    }).catch(function(){
        res.json({status:500,message:"error. contacte con el administrador del sistema"})
    })

}