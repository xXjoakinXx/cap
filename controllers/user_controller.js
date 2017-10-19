var models = require('../models/models')

exports.getUsersJson = function (req, res) {
    models.User.findAll().then(function (users) {
        res.json(users)
    })
}

exports.index = function (req, res) {
    res.render('registro');
}
exports.addUser = function (req, res) {

    //console.log("Esto es lo que sale en el body -->", req.body, "<-- Aqui acaba el body");

    models.User.create(req.body).then(usuario => {
        res.json({ status: 201, usuario: usuario });
    }).catch(err => {
        res.json({ status: 500 });
    });

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
        } else {
            callback(new Error('Usuario desconocido'), null)
        }
    });

}
exports.showRegistro = function (req, res) {
    res.render("registro")
}

exports.findByEmail = function (_email, callback) {
    models.User.find({
        where: {
            email: _email.query.email
        }
    }).then(function (user) {
        callback.json({ status: 201, user });
    });
}

exports.profile = function (req, res) {
    res.render('perfil');
}