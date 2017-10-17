var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/votos_controller');
var ctrlSession = require('../controllers/session_controller')

router.get('/', ctrl.votos);

module.exports = router;
