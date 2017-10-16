var app = angular.module('miModulo', []);
app.controller('miCtrl', function ($scope, $http) {

    $scope.comida = {
        primerPlato: "",
        segundoPlato: "",
        postre: "",
        bebida: "",
        lugar: "",
    }

    $scope.next = 0;

    $scope.siguiente = function () {
        $scope.next = 1;
    }
    $scope.finalizar = function ($event) {
        $http.post("/comidas/new", $scope.comida)
        .then(function (response) {
                console.log(response.data)
                 location.href ="/comidas"; 
            }, function (res) {
                alert("ERROR DESCONOCIDO")
            });
            $event.preventDefault();
    }
})