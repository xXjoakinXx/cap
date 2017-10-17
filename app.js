var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash'); //para mensajes flash

var routes = require('./routes/index');

var models = require('./models/models');
var users = require('./routes/users');
var personajes = require('./routes/personajes');
var votos = require('./routes/votos');
var comidas = require('./routes/comidas');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.urlencoded()); //permite pasar objetos desde un form 
app.use(cookieParser('quiz formacion cap'));
app.use(session());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

    //hacer visible session en las vistas
    res.locals.session = req.session;

    //hacer visible las queris en la vista
/*     console.log(req.url)
    res.locals.query  =  req.params.created; */

    next();
});

app.use('/', routes);
app.use('/users', users);
app.use('/comidas', comidas);
app.use('/personajes', personajes);
app.use('/votos', votos);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
