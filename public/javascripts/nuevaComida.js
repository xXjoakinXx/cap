var app = angular.module('miModulo', []);
app.controller('miCtrl', function ($window,$scope, $http) {

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
                console.log(response.data);
                $window.location.href ="/comidas?created=true"; 
            }, function (res) {
                alert("ERROR DESCONOCIDO")
            });
            // $event.preventDefault();
    }
})