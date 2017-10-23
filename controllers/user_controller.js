var models = require('../models/models')
var session = require('./session_controller')

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
<<<<<<< HEAD
exports.showRegistro = function (req, res) {
    res.render("registro")
}
=======
>>>>>>> ca652f4c7143b23ad98d9043ffaa1d901618914d

exports.findByEmail = function (_email, callback) {
    models.User.find({
        where: {
            email: _email.query.email
        }
    }).then(function (user) {
        callback.json({ status: 201, user });
    });
}

exports.findUserLoged = function (req, res){
    res.json(req.session.user);
}

exports.profile = function (req, res) {
    res.render('perfil');
}
exports.datos = function (req, res) {
    console.log("**Entra en perfil/datos");
    console.log(req.session.user.firstName);
    res.render('perfil/datos');
}
exports.editar = function (req, res) {
    res.render('perfil/editar');
}

exports.editUser = function (req, res) {
    models.User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email},
        {where: {id: req.session.user.id}}
    ).then(
        function(){
            req.session.user.firstName = req.body.firstName;
            req.session.user.lastName = req.body.lastName;
            req.session.user.email = req.body.email;
            req.session.save(function(err) {
                res.json({status: 200, data:{}})
                });
        }
    )
}