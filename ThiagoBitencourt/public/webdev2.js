'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, servicoUsuarios) {
  var incrementaId = 1;
  // servicoUsuarios.teste();


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

  $scope.excluirUsuario = function(usuario) {
    console.log("Excluir usuario");
    var usuarioSelecionado = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    var usuarioIndex = $scope.usuarios.indexOf(usuarioSelecionado);
    if(usuarioIndex > -1) {
      $scope.usuarios.splice(usuarioIndex, 1);
    }
  }

  $scope.editarUsuario = function() {
    console.log("Editar usuario");
    $scope.novoUsuario = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    $scope.adicionandoUsuario = true;
  }

  $scope.salvarNovoUsuario = function(usuario) {
    console.log(usuario);
    if(!usuario.id) {
      usuario.id = incrementaId++;
      $scope.usuarios.push(usuario);
    }
    $scope.novoUsuario = undefined;
    $scope.adicionandoUsuario = false;
  }

  $scope.selecionaUsuario = function(usuario) {
    $scope.usuarios.forEach(function(user) {
      if(user.id === usuario.id) {
        usuario.selecionado = !usuario.selecionado;
      } else {
        user.selecionado = false;
      }
    })
  }

})
