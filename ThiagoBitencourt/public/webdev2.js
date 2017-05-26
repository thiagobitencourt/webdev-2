'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, servicoUsuarios) {
  $scope.titulo = "Usuários";

  function carregarUsuarios() {
    console.log("Vou buscar os usuarios");
    servicoUsuarios.obterUsuarios()
    .then(function(resultado) {
      console.log("retornou os usuarios");
      console.log(resultado);
      $scope.usuarios = resultado.data;
    })
    .catch(function(resultado) {
      console.log(resultado.status);
      window.open('http://localhost:3000/erro404.html');
    });
    console.log("Busquei os usuarios?");
    console.log($scope.usuarios);
  }
  carregarUsuarios();

  $scope.adicionarUsuario = function() {
    $scope.adicionandoUsuario = true;
  }

  $scope.excluirUsuario = function() {
    var usuarioSelecionado = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    servicoUsuarios.excluirUsuario(usuarioSelecionado);
  }

  $scope.editarUsuario = function() {
    var usuarioEditavel = $scope.usuarios.find(function(user, index) {
      return user.selecionado;
    });
    $scope.novoUsuario = angular.copy(usuarioEditavel);
    $scope.adicionandoUsuario = true;
  }

  $scope.salvarNovoUsuario = function(usuario) {
    servicoUsuarios
      .salvarUsuario(usuario)
      .then(function(resultado) {
        console.log("salvou...");
        console.log(resultado);
        // $scope.usuarios.push(resultado.data);
        carregarUsuarios();
        $scope.novoUsuario = undefined;
        $scope.adicionandoUsuario = false;
      });
    console.log("mandei salvar...");
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
