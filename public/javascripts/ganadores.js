var app = angular.module('app', []);


app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

app.controller('miCtrl', function ($window, $scope, $http) {

    //paginacion angular
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.rondas = [];

    $scope.numberOfPages = function () {
        return Math.ceil($scope.rondas.length / $scope.pageSize);
    }
    //fin paginación angular

    $http.get("/rondas/ganadores/json?finalizadas=true")
        .then(function (response) {
            console.log(response.data);
            $scope.rondas = response.data
        }, function (res) {
            alert("ERROR DESCONOCIDO")
        });
    // $event.preventDefault();
})