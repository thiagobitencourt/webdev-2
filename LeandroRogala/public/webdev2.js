'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope){
  var incrementaId = 1;
  $scope.usuarios = [
    {
      id: incrementaId++,
      username: "ximbinha",
      password: "s2joelma",
      age: 18,
      email: "ximbinha@joelma"
    },
    {
      id: incrementaId++,
      username: "joelma",
      password: "s2ximbinha",
      age: 19,
      email: "joelma@ximbinha"
    }
  ];
  $scope.titulo = "Usuários";

  $scope.adicionarUsuario = function(){
    console.log("adicionarUsuario");
    $scope.adicionandoUsuario = true;
  }

  $scope.excluirUsuario = function(){
    var usuarioIndex;
    $scope.usuarios.forEach(function(user, index){
      if(user.selecionado === true){
        usuarioIndex = index;
      }
    });
    console.log(usuarioIndex);
    if(usuarioIndex !== undefined){
      $scope.usuarios.splice(usuarioIndex, 1);
      usuarioIndex = undefined;
    }
  }

  $scope.editarusuario = function(usuario){
    console.log("Entro aqui");
  }

  $scope.selecionaUsuario = function(usuario){
    $scope.usuarios.forEach(function(user){
      user.selecionado = false;
    });
    usuario.selecionado = !usuario.selecionado;
  }

  $scope.salvarNovoUsuario = function(usuario){
    console.log(usuario);
    usuario.id = incrementaId++;
    $scope.usuarios.push(usuario);
    $scope.novoUsuario = null;
    $scope.adicionandoUsuario = false;
  }
});
