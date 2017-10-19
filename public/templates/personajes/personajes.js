
var personaje = angular.module("personaje", ["ngRoute"]);

personaje.controller('personajeCtrl', ['$rootScope','$scope', '$sce', '$http','$window', '$location', 
function ($rootScope,$scope, $sce, $http, $window, $location) {
    $scope.listaP = "Lista de Personajes";
    $scope.voto = 1;
    $scope.votado = false;

     $http.get($rootScope.url+"/personajes/personajes").then(function(pers){
        $scope.personajes = pers.data;
     }); 

    $scope.funciones = {
        votar: function (pers) {
            if ($scope.voto > 0) {
                pers.votos++;

                $http.post($rootScope.url+"/personajes/personajes/" + pers.id, pers).then(function(res){
                    console.log(res);
                    if(res.data.estado == "true"){
                        $scope.voto--;
                        $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-success\" role=\"alert\">" + 
                        "<strong>Aceptado:</strong> El voto ha sido publicado  <div>");
                    }else if(res.data.estado == "false"){
                        pers.votos--;
                        $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-danger\" role=\"alert\">" + 
                        "<strong>Error:</strong> Ya has votado truhan <div>");
                    }else{
                        $window.location.href = "/login"; 
                    }
                });

            } else {
                $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-danger\" role=\"alert\">" + 
                "<strong>Error:</strong> Ya has votado truhan <div>");
            }

        }
    }
}]);