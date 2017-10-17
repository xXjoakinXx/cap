var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/personajes_controller');
var ctrlSession = require('../controllers/session_controller')

router.get('/templates/login', ctrl.personajes);

module.exports = router;
