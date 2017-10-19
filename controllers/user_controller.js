var models = require('../models/models')

exports.getUsersJson = function(req,res){
    models.User.findAll().then(function(users){
        res.json(users)
    })
}
exports.autenticar = function (_email, _pass, callback) {
    models.User.findAll({
        where: {
            email: _email,
        }
    }).then(function (user) {
        if (user[0]) {
            if (_pass == user[0].password) {
                console.log("usuario logueado")
                callback(null, user[0]);
            } else {
                console.log("ERROR")
                callback(new Error('Usuario desconocido'), null)
            }
        }else{
            callback(new Error('Usuario desconocido'), null)
        }
    });

}
exports.showRegistro = function(req,res){
    res.render("registro")
}
