
var app = angular.module('app', ['factoria'])
app.controller('ctrl', function (facComidas, $scope, $http, $location) {

    $scope.listaComidas = [];
    $scope.loading = true;

    var url_string = $location.absUrl();
    var url = new URL(url_string);
    $scope.success = url.searchParams.get("created");
   
    promise = facComidas.getComidas();
    promise.then(function (data) {
        $scope.listaComidas = data;
        $scope.loading = false;
    });
    promiseRanking = facComidas.getRanking();
    promiseRanking.then(function (data) {
        $scope.ranking = data;
    })

});