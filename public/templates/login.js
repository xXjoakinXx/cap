var app = angular.module("app", ["ngRoute", "personaje"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/templates/personajes/personajes.html",
        controller: "personajeCtrl"
    })
        
        .otherwise({ redirectTo: "/" });
});

app.controller('appCtrl', ['$scope', function ($scope) {
    

}]);