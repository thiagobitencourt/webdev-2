'use strict'

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope){

  $scope.titulo = "Usuário"
  $scope.adicionarUsuario = function(){
    console.log('Adicionar Usuario');
  }

  $scope.excluirUsuario = function(){
    console.log('Excluir Usuario');
  }

  $scope.editarUsuario = function(){
    console.log('Editar Usuario');
  }
});
