var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/comidas_controller');

router.get('/', ctrl.index);

module.exports = router;
