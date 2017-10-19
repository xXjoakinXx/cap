
var ronda = angular.module("rondas", ["ngRoute"]);

ronda.controller("rondaCtrl", ['$scope','$rootScope','$http','$location', 
    function($scope, $rootScope, $http, $location){
    $scope.saludo = "Rondas";

    $http.get($rootScope.url + "/rondas/json").then(function(result){
        $scope.rondas = result.data;
    });

    $scope.irRonda = function(ronda){
       location.href = "#/personaje/" + ronda.id;
    }
}]);