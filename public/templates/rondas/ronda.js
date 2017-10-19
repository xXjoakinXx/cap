
var ronda = angular.module("rondas", ["ngRoute"]);

ronda.controller("rondaCtrl", ['$scope', function($scope){
    $scope.saludo = "Rondas";

    $scope.rondas = [{
        nombre: "Personaje histórico",
        fechaFin: "2017-9-10" 
    },{
        nombre: "Paelleros por el mundo",
        fechaFin: "2016-8-09"
    },{
        nombre: "Fiesteros",
        fechaFin: "2015-5-03"
    }];

    $scope.irRonda = function(ronda){
        alert(ronda);
    }
}]);