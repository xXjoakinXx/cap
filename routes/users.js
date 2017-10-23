var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/user_controller');
var ctrlSession = require('../controllers/session_controller')


/* GET users listing. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/json', ctrl.getUsersJson);
router.get('/registro', ctrl.index)
router.post('/registro', ctrl.addUser);
router.get('/userEmail', ctrl.findByEmail);
router.get('/perfil', ctrlSession.loginRequired, ctrl.profile)
router.get('/perfil/datos', ctrlSession.loginRequired, ctrl.datos)
router.get('/perfil/datos/editar', ctrlSession.loginRequired, ctrl.editar)
router.get('/userLoged', ctrlSession.loginRequired, ctrl.findUserLoged);
router.put('/userEdit/', ctrlSession.loginRequired, ctrl.editUser);
module.exports = router;
