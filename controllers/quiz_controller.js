var models = require('../models/models')

/**
 * esta funcion se ejecuta antes del metodo del controllador.
 * MIDDESWARE
 */
exports.load = function (req, res, next, quizId) {

    models.Quiz.findById(quizId).then(function (quiz) {
        if (quiz) {
            req.quiz = quiz;
            next();
        } else {
            next(new Error("No existe la pregunta: " + quizId))
        }
    }).catch(function (error) { next(error) })

}


exports.questions = function (req, res) {
    models.Quiz.findAll({
          include: [{
              all: true
          }]
    }).then(function (quizs) {
        //res.json(quizs) //para devolver un json
        res.render('questions', { quizs });
    }).catch(function (error) {
        console.log(error);
    });
}
exports.question = function (req, res) {

    console.log("ID: " + req.params.quizId);

    //DEVUELVE UN ARRAY
    // models.Quiz.findAll({
    //     where: {
    //         id: req.params.quizId
    //     }
    // }).then(function (quiz) {
    //     console.log(quiz)
    //     res.render('question', { quiz: quiz })
    // });

    //DEVUELVE UN objeto
    // models.Quiz.findById(req.params.quizId).then(function (quiz) {
    //     res.render('question', { quiz: quiz })
    // })

    res.render('question', { quiz: req.quiz });


}
exports.answer = function (req, res) {
    // models.Quiz.findById(req.params.quizId).then(function (quiz) {

    if (req.query.answer.toLowerCase() == req.quiz.respuesta.toLowerCase()) {
        res.render('answer', { quiz: req.quiz, respuesta: "Correcta" })
    } else {
        res.render('answer', { quiz: req.quiz, respuesta: "Incorrecta" })

    }

    // })

}
exports.addQuestion = function (req, res) {

    // console.log("PARAMETROS");
    // console.log(req);
     req.body.quiz.userId =  req.session.user.id;
    models.Quiz.create(req.body.quiz).then(quiz => {
        res.render('newQuestion', { quiz: quiz, success: "Pregunta creada con exito" });
    }).catch(err => {
        res.render('newQuestion', { quiz: req.body.quiz, errors: err.errors })
    });

    // var quiz = models.Quiz.build(req.body.quiz);
    // quiz.validate().then(function (err) {
    //     if (err) {
    //         res.render('newQuestion', { quiz: quiz, error: err.errors })
    //     } else {
    //         quiz.save().then(function (quiz) {
    //             res.render('newQuestion', { quiz: quiz, error: ""  })
    //         })
    //     }
    // });

}

exports.showAddQuestion = function (req, res) {
    res.render('newQuestion',{ quiz:{pregunta:"",respuesta:""} })
}

exports.remove = function (req, res) {

req.quiz.destroy().then(()=>{
    res.redirect('back');
})
}
