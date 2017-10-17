var models = require('../models/models')
var Sequelize = require('sequelize');

exports.index = function (req, res) {
    res.render('registro');
}
exports.addUser = function (req, res) {
    
        models.User.create(req.body).then(comida => {
            res.json({ status: 201, comida: comida });
        }).catch(err => {
            res.json({ status: 500 });
        });
    
    }