
var ronda = angular.module("rondas", ["ngRoute"]);

ronda.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
ronda.controller("rondaCtrl", ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.rondas = [];

        $scope.numberOfPages = function () {
            return Math.ceil($scope.rondas.length / $scope.pageSize);
        }

        $scope.saludo = "Rondas";

        $http.get($rootScope.url + "/rondas/json").then(function (result) {
            $scope.rondas = result.data;
        });

        $scope.irRonda = function (ronda) {
            location.href = "#/personaje/" + ronda.id;
        }
    }]);