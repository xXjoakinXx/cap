var personaje = angular.module("personaje", ["ngRoute"]);

personaje.controller('personajeCtrl', ['$scope', function ($scope) {
    $scope.listaP = "Lista de Personajes";
    $scope.voto = 1;

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

    $scope.funciones = {
        votar: function(pers){
            if($scope.voto > 0){
                pers.votos++;
                $scope.voto--;
            }else{
                alert("Ya has votado, no hagas trampas truhan!!");
            }    

        }    
    } 
}]);