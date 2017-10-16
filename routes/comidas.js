var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/comidas_controller');
var ctrlSession = require('../controllers/session_controller')

/* router.get('/', ctrlSession.loginRequired, ctrl.index);
router.get('/new',ctrlSession.loginRequired, ctrl.newComida);
router.post('/new',ctrlSession.loginRequired, ctrl.addComida);
router.get('/hoy',ctrlSession.loginRequired, ctrl.getJsonComidas);
router.post('/:idComida/delete',ctrlSession.loginRequired, ctrl.borrarComida); */

 router.get('/', ctrl.index);
router.get('/new', ctrl.newComida);
router.post('/new', ctrl.addComida);
router.get('/hoy', ctrl.getJsonComidas);
router.post('/:idComida/delete' , ctrl.borrarComida); 
router.get('/ranking' , ctrl.getRankingLugares); 

module.exports = router;
