var models = require('../models/models')

exports.loginRequired = function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login')
    }
}

exports.new = function (req, res) {
    res.render('login', { messages: req.flash('error-login') });

}
exports.create = function (req, res) {

    var email = req.body.email;
    var pass = req.body.password;

    var ctrlUser = require('./user_controller');
    ctrlUser.autenticar(email, pass, function (err, user) {
        if (err) {
            req.flash('error-login', 'Login incorrecto');
            res.redirect('/login');
        } else {
            req.session.user = user;
            res.redirect(req.session.redir);
        }
    })

}
exports.destroy = function (req, res) {
    req.session.user = null,
        delete req.session.user;
    res.redirect("/");
}
