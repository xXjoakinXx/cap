var express = require('express');
var router = express.Router();
var ctrlSession = require('../controllers/session_controller')
var ctrl2 = require('../controllers/admin_controller')

router.get('/login', ctrlSession.loginUnRequired, ctrlSession.new); //show formulario
router.post('/login', ctrlSession.loginUnRequired, ctrlSession.create);
router.post('/logout', ctrlSession.loginUnRequired, ctrlSession.destroy);

router.get('/admin', ctrlSession.loginRequired, ctrl2.index);
router.get('/admin/create-frase', ctrlSession.loginRequired, ctrl2.createFrase); //muestra la vista
router.get('/admin/rondas/json/', ctrlSession.loginRequired, ctrl2.getRondasJson); //json de todas las rondas
router.get('/admin/ronda/create', ctrlSession.loginRequired, ctrl2.createRonda); //muestra vista nueva ronda
router.post('/admin/personaje/create', ctrlSession.loginRequired, ctrl2.addFrase); //añade la frase del personaje
router.post('/admin/ronda/create', ctrlSession.loginRequired, ctrl2.addRonda); //añade ronda
router.post('/admin/ronda/poblate', ctrlSession.loginRequired, ctrl2.poblateRonda);

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
