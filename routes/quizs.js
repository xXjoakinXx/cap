var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/quiz_controller');
var ctrlSession = require('../controllers/session_controller')


router.param('quizId', ctrl.load); //Ejecutamos middesware

router.get('/', ctrl.questions);
router.get('/question/:quizId',ctrlSession.loginRequired, ctrl.question);
router.post('/add',ctrlSession.loginRequired, ctrl.addQuestion);
router.get('/add',ctrlSession.loginRequired, ctrl.showAddQuestion);
router.get('/question/:quizId/answer',ctrlSession.loginRequired, ctrl.answer);
router.post('/question/:quizId/delete',ctrlSession.loginRequired, ctrl.remove);

module.exports = router;
