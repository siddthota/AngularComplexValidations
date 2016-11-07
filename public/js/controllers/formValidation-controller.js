(function() {
'use strict';

angular.module('formValidation')
    .controller('formValidationCtrl', formValidationCtrl);

    formValidationCtrl.$inject = ['$scope', '$http'];

    function formValidationCtrl($scope, $http) {

        $scope.genders = ["Male", "Female"];

    $scope.formModel = {
    };

    $scope.submit = function() {
        //console.log("Hey your data is ", $scope.formModel);

            $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
                .success(function (data) {
                    console.log("Successfully registered");
                    console.log($scope.formModel);
                })
                .error(function () {
                    console.log("Registration Failed");
                })

    }

}

}());