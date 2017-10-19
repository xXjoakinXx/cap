
var ronda = angular.module("rondas", ["ngRoute"]);

ronda.controller("rondaCtrl", ['$scope','$rootScope','$http','$location', 
    function($scope, $rootScope, $http, $location){
    $scope.saludo = "Rondas";

    $http.get($rootScope.url + "/rondas/json").then(function(result){
        $scope.rondas = result.data;

        $scope.rondas.forEach(function(element) {
            //Parseo de la fecha de cada ronda
            var parse = element.fechaFin.split("T");
            var date = parse[0].split("-");
            var hour = parse[1].split(":");
            
            element.fechaParse = date[2] + "/"+ date[1] + "/"+ date[0] + 
            " a las " + hour[0] + ":" + hour[1]; 

            //Comparación con la fecha actual para establecer estado
            var today = new Date();
            var dateR = new Date(element.fechaFin);
            if(dateR.getTime() < today.getTime()){
                element.estado = false;
            }else{
                element.estado = true;
            }
        
        }, this);
    });

    $scope.irRonda = function(ronda){
       location.href = "#/personaje/" + ronda.id;
    }
}]);