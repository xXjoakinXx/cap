var app = angular.module("app", ["ngRoute", "personaje"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "personajes/personajes.html",
        controller: "personajeCtrl"
    })
        
        .otherwise({ redirectTo: "/" });
});

app.controller('appCtrl', ['$scope', function ($scope) {
    $scope.saludo = "Bienvenido Personaje!";

}]);