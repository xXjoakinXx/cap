var app = angular.module('appProf', [])
app.controller('ctrlProf', function ($scope, $http, $location, $window) {
    $http.get('/users/userLoged', {})
    .then(function(response){
        $scope.editNombre=response.data.firstName;
        $scope.editApellidos=response.data.lastName;
        $scope.editEmail=response.data.email;
    },function(){}
    );
    $scope.guardar = function () {
        console.log("entra");
        $http.put('/users/userEdit', 
        {firstName: $scope.editNombre, lastName: $scope.editApellidos,email: $scope.editEmail}, {}).then(function (){
            $window.location.href="/users/perfil/datos";
        });
    }
})
