
var personaje = angular.module("personaje", ["ngRoute"]);

personaje.controller('personajeCtrl', ['$rootScope', '$scope', '$sce', '$http', '$window', '$location', '$routeParams',
    function ($rootScope, $scope, $sce, $http, $window, $location, $routeParams) {
        $scope.listaP = "Frases";
        $scope.voto = 1;
        $scope.votado = false;

        //Si esta finalizada aparecerá al principio la imágen de perfil del usuario ganador
        var objP = $location.search();
        if (objP.estado == "finalizada") {
/*            console.log("ENTRO AQUI");
 */         $scope.finalizada = true;
        }

        $http.get($rootScope.url + "/personajes/ronda/" + $routeParams.rondaId).then(function (pers) {
            if (pers.data.length > 0) {
                $scope.personajes = pers.data;
                $scope.listaP = "Frases de " + pers.data[0].ronda.nombre;
                $scope.ganador = $scope.personajes[0].user;
/*                 console.log($scope.ganador);
 */            }
        });

        $scope.funciones = {
            votar: function (pers) {
                if ($scope.voto > 0 && !$scope.finalizada) {
                    pers.votos++;
                    $http.post($rootScope.url + "/personajes/votar/" + pers.id, pers).then(function (res) {
                        //console.log(res);
                        if (res.data.estado == "true") {
                            $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-success\" role=\"alert\">" +
                                "<strong>Aceptado:</strong> El voto ha sido publicado  <div>");
                        } else if (res.data.estado == "false") {
                            pers.votos--;
                            $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-danger\" role=\"alert\">" +
                                "<strong>Error:</strong> Ya has votado truhan <div>");
                        } else {
                            pers.votos--;
                            $window.location.href = "/login";
                        }
                        $scope.voto--;
                    });

                } else {
                    $scope.alert = $sce.trustAsHtml("<div class=\"alert alert-danger\" role=\"alert\">" +
                        "<strong>Error:</strong> Ya has votado truhan <div>");
                }

            }
        }
    }]);