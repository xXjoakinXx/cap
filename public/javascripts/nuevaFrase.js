var app = angular.module('app', []);
app.controller('miCtrl', function (personajes, $http, $scope) {

    promise = personajes.getUsers();
    promise2 = personajes.getRondas();
    promise2.then(function (data) {
        $scope.rondas = data;
        $scope.citaCelebre.rondaId = $scope.rondas[0].id;
    });
    promise.then(function (data) {
        $scope.users = data;
        $scope.citaCelebre = {
            userId: $scope.users[0].id,
            frase: "",
            votos: 0,
            rondaId: "",
        };

    });
    $scope.submitForm = function (form) {
        if (form.$valid) {
            promise = personajes.addPersonaje($scope.citaCelebre);
            promise.then(function (personaje) {
                $scope.error = false;
                $scope.alert = true;
            })
        } else {
            $scope.error = true;
            $scope.alert = false;
        }

    };

}).factory('personajes', function ($http) {

    return {

        addPersonaje: function (citaCelebre) {
            return $http.post('/admin/personaje/create', citaCelebre).then(function (respuesta) {
                return respuesta.data;
            })
        },
        getRondas: function () {
            return $http.get('/admin/rondas/json').then(function (respuesta) {
                return respuesta.data;
            })
        },
        getUsers: function () {
            return $http.get('/users/json').then(function (respuesta) {
                return respuesta.data;
            })
        }

    }

});