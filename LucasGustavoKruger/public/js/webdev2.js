'use strict'

var app = angular.module('webdev-2', []);

app.controller('usuarioController', function($scope) {
  
  $scope.title = "Usuários";
  
  $scope.usuarios = [
    {
      id: 1,
      username: "Lucas Krüger",
      password: "1234",
      age: 18,
      email: "lucas.kr1996@gmail.com"
    }
  ];

  $scope.adicionarUsuario = function() {
    console.log('Adicionar');
  }

  $scope.editarUsuario = function() {
    console.log('Editar');
  }

  $scope.excluirUsuario = function() {
    console.log('Excluir');
  }
});