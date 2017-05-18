'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope){
  $scope.usuario = {
    id: 1,
    username: "ximbinha",
    password: "s2joelma",
    age: 18,
    email: "ximbinha@joelma"
  }
  $scope.titulo = "Usuários";
  $scope.adicionarUsuario = function(){
    console.log("adicionarUsuario");
  }
  $scope.excluirUsuario = function(){
    console.log("Excluir usuario");
  }
  $scope.editarusuario = function(){
    console.log("Editar usuario");
  }
});
