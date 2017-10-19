var app = angular.module('appReg', [])
app.controller('ctrlReg', function ($scope, $http, $location) {

    $scope.password2 ="";
    $scope.usuario = {
        firstName: "",
        lastName: "",
        email: "",
        password: "", //usare password para evitar la ñ
    }
    $scope.registrar = function () {
        var numErrores = 5;
        if (typeof $scope.usuario.firstName != "undefined" && $scope.usuario.firstName!==""){
            numErrores--;
            $scope.errName="";
            $scope.wrongName={'border-color':'default','background-color':'default'};
        }else{
            $scope.errName="El nombre de Usuario no puede estar vacio"
            $scope.wrongName={'border-color':'red','background-color':'rgb(251, 196, 196)'};
        }
        if (typeof $scope.usuario.lastName != "undefined" && $scope.usuario.lastName!==""){
            numErrores--;
            $scope.errSurname="";
            $scope.wrongSurname={'border-color':'default','background-color':'default'};        
        }else{
            $scope.errSurname="El apellido del Usuario no puede estar vacio";
            $scope.wrongSurname={'border-color':'red','background-color':'rgb(251, 196, 196)'};
        }
        if (typeof $scope.usuario.email != "undefined" && $scope.usuario.email!==""){
            numErrores--;
            $scope.errEmail="";
            $scope.wrongEmail={'border-color':'default','background-color':'default'};            
        }else{
            $scope.errEmail="El email no es correcto";
            $scope.wrongEmail={'border-color':'red','background-color':'rgb(251, 196, 196)'};
        }
        if (typeof $scope.usuario.password != "undefined" && $scope.usuario.password!==""){
            numErrores--;
            $scope.errPassword="";
            $scope.wrongPassword={'border-color':'default','background-color':'default'};        
        }else{
            $scope.errPassword="La contraseña no puede ser vacia ni solo espacios en blanco";
            $scope.wrongPassword={'border-color':'red','background-color':'rgb(251, 196, 196)'};
        }
        if ($scope.usuario.password === $scope.password2){
            numErrores--;
            $scope.errCompPassword="";
            $scope.wrongPassword2={'border-color':'default','background-color':'default'};
        }else{
            $scope.errCompPassword="Las contraseñas no coinciden";
            $scope.wrongPassword2={'border-color':'red','background-color':'rgb(251, 196, 196)'};
        }
        $http.get('/users/user', {params: { email: $scope.usuario.email}})
        .then(
            function(response){
               if(!numErrores){
                   if (!response.data.user){
                    $http.post("/users/registro", $scope.usuario)
                    .then(function (response) {
                            location.href ="/login"; 
                        }, function (res) {
                            alert("ERROR DESCONOCIDO")
                        });   
                    }else{
                        $scope.errEmail="Este correo ya está en uso";
                        $scope.wrongEmail={'border-color':'red','background-color':'rgb(251, 196, 196)'};
                    }
                }
            },function(){

            }
        )

     

    }
    
})