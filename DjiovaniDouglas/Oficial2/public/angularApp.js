'use strict';

var listaTitulares = angular.module('ContaLista', []);

function mainController($scope, $http) {

   var refresh = function () {
       $http.get('/Conta/')
           .success(function (data) {
               $scope.Contas = data;
               $scope.form = {};
           }).error(function (data) {});
   };

   refresh();

   $scope.createConta = function () {
       $http.post('/Conta/', $scope.formConta)
           .success(function (data) {
               $scope.formConta = {};
               console.log(data);
           }).error(function (data) {
               console.log('Error: ' + data);
           });
   };
   $scope.deleteConta = function (id) {
       $http.delete('/Conta/' + id)
           .success(function (data) {
               $scope.Conta = data;
               console.log(data);
           }).error(function (data) {
               console.log('Error: ' + data);
           });
   };
   $scope.changeConta = function (id) {
       $http.get('/Conta/' + id)
           .success(function (data) {
               $scope.formConta = data;
               console.log(data);
           }).error(function (data) {
               console.log('Error: ' + data);
           });
   };
   $scope.updateConta = function () {
       $http.put('/Conta/' + $scope.formConta._id, $scope.formConta)
           .success(function (response) {
               refresh();
           });
   };
}
