var models = require('../models/models')


exports.autenticar = function(_email,_pass,callback){

    models.User.findAll({
        where: {
          email: _email,
        }
      }).then(function(user){
        // if(_pass == user.password){
            callback(null,user[0]);
        // }else{
            // callback(new Error('Usuario desconocido'))
        // }
      });

}
