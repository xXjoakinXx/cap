var models = require('../models/models')
var Sequelize = require('sequelize');

exports.getRondasJson = function(res,req){

models.Rondas.findAll().then(function(rondas){
    return res.json(rondas)
})

}

