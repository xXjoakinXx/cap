var app = angular.module('app', []);
app.controller('miCtrl', function ($window,$scope, $http) {

    $scope.rondas;

        $http.get("/rondas/ganadores/json?finalizadas=true")
        .then(function (response) {
                console.log(response.data);
              $scope.rondas = response.data
            }, function (res) {
                alert("ERROR DESCONOCIDO")
            });
            // $event.preventDefault();
})