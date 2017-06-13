'use strict';

var listaTitulares = angular.module('AccountList', []);

function mainController($scope, $http) {

    var refresh = function () {
        $http.get('/Account/')
            .success(function (data) {
                $scope.accounts = data;
                $scope.form = {};
            }).error(function (data) {});
    };

    refresh();

    $scope.createAccount = function () {
        $http.post('/Account/', $scope.formAccount)
            .success(function (data) {
                $scope.formAccount = {};
                console.log(data);
            }).error(function (data) {
                console.log('Error: ' + data);
            });
    };
    $scope.deleteAccount = function (id) {
        $http.delete('/Account/' + id)
            .success(function (data) {
                $scope.account = data;
                console.log(data);
            }).error(function (data) {
                console.log('Error: ' + data);
            });
    };
    $scope.changeAccount = function (id) {
        $http.get('/Account/' + id)
            .success(function (data) {
                $scope.formAccount = data;
                console.log(data);
            }).error(function (data) {
                console.log('Error: ' + data);
            });
    };
    $scope.updateAccount = function () {
        $http.put('/Account/' + $scope.formAccount._id, $scope.formAccount)
            .success(function (response) {
                refresh();
            });
    };
}
