var app = angular.module('app', [])
app.controller('ctrl', function ($scope, $http, $location) {

    $scope.password2 ="";
    $scope.usuario = {
        nombre: "",
        apellidos: "",
        email: "",
        password: "", //usare password para evitar la ñ
    }
    $scope.registrar = function () {
        
        $http.post("/users/registro", $scope.usuario)
        .then(function (response) {
                console.log(response.data);
                $window.location.href ="/login"; 
            }, function (res) {
                alert("ERROR DESCONOCIDO")
            });
            
            
    }
    
})