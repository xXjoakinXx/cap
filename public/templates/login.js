
var app = angular.module("app", ["ngRoute", "personaje"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/templates/personajes/personajes.html",
        controller: "personajeCtrl"
    }).otherwise({ redirectTo: "/" });
});

app.controller('appCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
    
    $rootScope.url = 'http://localhost:3000';

}]);