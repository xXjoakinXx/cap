var express = require('express');
var router = express.Router();
var ctrlSession = require('../controllers/session_controller')
var ctrl2 = require('../controllers/admin_controller')

router.get('/login', ctrlSession.new); //show formulario
router.post('/login', ctrlSession.create);
router.post('/logout', ctrlSession.destroy);

router.get('/admin',ctrlSession.loginRequired, ctrl2.index);
router.get('/admin/create-frase',ctrlSession.loginRequired, ctrl2.createFrase); //muestra la vista
router.post('/admin/personaje/create',ctrlSession.loginRequired, ctrl2.addFrase); //añade la frase del personaje
router.get('/admin/ronda/create',ctrlSession.loginRequired, ctrl2.createRonda); //muestra vista nueva ronda
router.post('/admin/ronda/create',ctrlSession.loginRequired, ctrl2.addRonda); //añade ronda
router.get('/admin/rondas/json/',ctrlSession.loginRequired, ctrl2.getRondasJson); //json de todas las rondas


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
