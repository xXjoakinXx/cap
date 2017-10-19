var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/personajes_controller');
var ctrlVotos = require('../controllers/votos_controller');
var ctrlSession = require('../controllers/session_controller')

router.get('/templates/login', ctrl.personajes);
router.get('/personajes', ctrl.get);
router.get('/ronda/:rondaId', ctrl.getPersonajesByRonda);
router.post('/personajes/:personajesId(\\d+)', ctrlSession.loginRequired,ctrlVotos.votar, ctrl.votar);

module.exports = router;
