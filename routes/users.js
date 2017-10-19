var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/user_controller');
var ctrlSession = require('../controllers/session_controller')


/* GET users listing. */
router.get('/', function(req, res) {
  res.render('index');
});
router.get('/registro', ctrl.index)
router.post('/registro', ctrl.addUser);
router.get('/user', ctrl.findByEmail);
router.get('/perfil', ctrlSession.loginRequired, ctrl.profile)

module.exports = router;
