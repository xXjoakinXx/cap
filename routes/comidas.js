var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/comidas_controller');

router.get('/', ctrl.index);
router.get('/hoy', ctrl.getJsonComidas);
router.post('/:idComida/delete', ctrl.borrarComida);

module.exports = router;
