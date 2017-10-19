var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/session_controller')
var ctrl2 = require('../controllers/admin_controller')

router.get('/login', ctrl.new); //show formulario
router.post('/login', ctrl.create);
router.post('/logout', ctrl.destroy);

router.get('/admin', ctrl2.index);
router.get('/admin/create-frase', ctrl2.createFrase); //muestra la vista
router.post('/admin/personaje/create', ctrl2.addFrase); //añade la frase del personaje
router.get('/admin/ronda/create', ctrl2.createRonda); //muestra vista nueva ronda
router.post('/admin/ronda/create', ctrl2.addRonda); //añade ronda
router.get('/admin/rondas/json/', ctrl2.getRondasJson); //añade ronda


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
