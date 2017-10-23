var express = require('express');
var router = express.Router();
var ctrlAdmin = require('../controllers/admin_controller')
var ctrlRondas = require('../controllers/rondas_controller')
var ctrlSession = require('../controllers/session_controller')

router.get('/json', ctrlRondas.getRondasJson);
router.get('/ganadores', ctrlRondas.showganadores);
router.get('/ganadores/json', ctrlAdmin.getRondasJson);

module.exports = router;
