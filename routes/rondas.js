var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/admin_controller')
var ctrlSession = require('../controllers/session_controller')

router.get('/json', ctrl.getRondasJson);

module.exports = router;
