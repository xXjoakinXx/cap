var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/session_controller')

router.get('/login', ctrl.new); //show formulario
router.post('/login', ctrl.create);
router.post('/logout', ctrl.destroy);


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
