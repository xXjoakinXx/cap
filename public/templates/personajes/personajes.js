var personaje = angular.module("personaje", ["ngRoute"]);

personaje.controller('personajeCtrl', ['$scope', function ($scope) {
    $scope.listaP = "Lista de Personajes";

    $scope.personajes = [
        {
            nombre: "Miguel",
            votos: 0
        },
        {
            nombre: "David",
            votos: 0
        }, 
        {
            nombre: "Juanjo",
            votos: 0
        }];

}]);