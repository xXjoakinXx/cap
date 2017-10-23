
var ronda = angular.module("rondas", ["ngRoute"]);

ronda.filter('startFrom', function () {
    return function (input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
ronda.controller("rondaCtrl", ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        $scope.saludo = "Rondas";

        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.rondas = [];

        $scope.numberOfPages = function () {
            return Math.ceil($scope.rondas.length / $scope.pageSize);
        }

        $http.get($rootScope.url + "/rondas/json").then(function (result) {
            $scope.rondas = result.data;

            $scope.rondas.forEach(function (element) {
                //Parseo de la fecha de cada ronda
                var parse = element.fechaFin.split("T");
                var date = parse[0].split("-");
                var hour = parse[1].split(":");

                element.fechaParse = date[2] + "/" + date[1] + "/" + date[0] +
                    " a las " + hour[0] + ":" + hour[1];

                //Comparación con la fecha actual para establecer estado
                var today = new Date();
                var dateR = new Date(element.fechaFin);
                if (dateR.getTime() < today.getTime()) {
                    element.estado = false;
                } else {
                    element.estado = true;
                }

            }, this);
        });

        $scope.irRonda = function (ronda) {
            var estado = "";

            if (ronda.estado == false) estado = "?estado=finalizada";

            location.href = "#/personaje/" + ronda.id + estado;
        }
    }]);
