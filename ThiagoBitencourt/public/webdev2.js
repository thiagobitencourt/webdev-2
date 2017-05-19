'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope) {
  var incrementaId = 1;

  $scope.titulo = "Usuários";
  $scope.usuarios = [
    {
      id: incrementaId++,
      username: "chiquinha",
      password: "chavesquerido",
      age: 7,
      email: "chiquinha@vila.com"
    },
    {
      id: incrementaId++,
      username: "jaime",
      password: "jaime123",
      age: 18,
      email: "jai@me.com"
    },
    {
      id: incrementaId++,
      username: "tibursio",
      password: "12345",
      age: 89,
      email: "tibursio@quase.com"
    }
  ];

  $scope.adicionarUsuario = function() {
    console.log("Adicionar usuario");
    $scope.adicionandoUsuario = true;
  }

  $scope.excluirUsuario = function() {
    console.log("Excluir usuario");
  }

  $scope.editarUsuario = function() {
    console.log("Editar usuario");
  }

  $scope.salvarNovoUsuario = function(usuario) {
    console.log(usuario);
    usuario.id = incrementaId++;
    $scope.usuarios.push(usuario);
    $scope.novoUsuario = undefined;
    $scope.adicionandoUsuario = false;
  }


})
