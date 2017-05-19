'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope) {

  $scope.titulo = "Usuários";
  $scope.usuarios = [
    {
      id: 2,
      username: "chiquinha",
      password: "chavesquerido",
      age: 7,
      email: "chiquinha@vila.com"
    },
    {
      id: 1,
      username: "jaime",
      password: "jaime123",
      age: 18,
      email: "jai@me.com"
    },
    {
      id: 3,
      username: "tibursio",
      password: "12345",
      age: 89,
      email: "tibursio@quase.com"
    }
  ];

  $scope.usuario = {
    id: 1,
    username: "jaime",
    password: "jaime123",
    age: 18,
    email: "jai@me.com"
  };

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
