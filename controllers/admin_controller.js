var models = require('../models/models')
var Sequelize = require('sequelize');

exports.index = function (req, res) {
    res.render('admin/panelAdmin', {layout:'admin/panelAdmin'});
}
exports.createFrase = function (req, res) {
    res.render('admin/createFrase',{layout:'admin/createFrase'});
}
exports.addFrase = function(req,res){

    console.log(req.body)
    models.Personajes.create(req.body).then(function(personaje){
        res.json(personaje)
    }).catch(function(){
        res.json({status:500,message:"error. contacte con el administrador del sistema"})
    })

}
exports.createRonda = function (req, res) {
    res.render('admin/createRonda', {layout: 'admin/createRonda'});
}
exports.getRondasJson = function(req,res){
    models.Rondas.findAll().then(function(rondas){
        res.json(rondas)
    })
}
exports.addRonda = function (req, res) {
    
    models.Rondas.create(req.body).then(function(ronda){
        res.render('admin/createRonda',{message: "Ronda creada correctamente"});
    }).catch(function(err){
        res.json(err)
    })

}