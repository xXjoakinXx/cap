
var app = angular.module("app", ["ngRoute", "personaje", "rondas"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/personaje/:rondaId", {
        templateUrl: "/templates/personajes/personajes.html",
        controller: "personajeCtrl"
    })
    .when("/", {
        templateUrl: "/templates/rondas/ronda.html",
        controller: "rondaCtrl"
    })
    .otherwise({ redirectTo: "/" });
});

app.controller('appCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
    
    $rootScope.url = 'http://localhost:3000';

}]);