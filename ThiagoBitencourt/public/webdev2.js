'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope) {

  $scope.titulo = "Usuários";
  $scope.adicionarUsuario = function() {
    console.log("Adicionar usuario");
  }

  $scope.excluirUsuario = function() {
    console.log("Excluir usuario");
  }

  $scope.editarUsuario = function() {
    console.log("Editar usuario");
  }

})
