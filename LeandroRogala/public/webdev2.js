'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope){
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
