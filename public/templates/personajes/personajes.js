var personaje = angular.module("personaje", ["ngRoute"]);

personaje.controller('personajeCtrl', ['$scope', '$sce', '$http','$window', '$location', 
function ($scope, $sce, $http, $window, $location) {
    $scope.listaP = "Lista de Personajes";
    $scope.voto = 1;
    $scope.votado = false;

     $http.get("http://localhost:3000/personajes/personajes").then(function(pers){
        $scope.personajes = pers.data;
     }); 

    $scope.funciones = {
        votar: function (pers) {
            if ($scope.voto > 0) {
                pers.votos++;

                $http.post("http://localhost:3000/personajes/personajes/" + pers.id, pers).then(function(res){
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
                       /* pers.votos--;
                       $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-info\" role=\"alert\">" + 
                       "<strong>Atención:</strong> Para poder votar debes logearte <div>"); */
                    }
                });

               
                
            } else {
                $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-danger\" role=\"alert\">" + 
                "<strong>Error:</strong> Ya has votado truhan <div>");
            }

        }
    }
}]);