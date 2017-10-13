var app = angular.module('app', [])
app.controller('ctrl', function ($scope, $http, $location) {

    $scope.listaComidas = [];
    $scope.loading = true;

    $http.get("/comidas/hoy")
        .then(function (response) {
            $scope.loading = false;
            $scope.listaComidas = response.data;
        }, function (res) {
            alert("ERROR DESCONOCIDO")
        });


})