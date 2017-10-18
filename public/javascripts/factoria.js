var factoria = angular.module('factoria', [])

factoria.factory('facComidas', function ($http) {
    return {
        getRanking: function(){
            return $http.get("/comidas/ranking")
            .then(function (response) {
                return response.data;
            }, function (res) {
                alert("ERROR DESCONOCIDO")
            });
        },
        getComidas: function () {
            return $http.get("/comidas/hoy")
                .then(function (response) {
                    /*   $scope.loading = false; */
                    return response.data;
                }, function (res) {
                    alert("ERROR DESCONOCIDO")
                });
        }
    }


})