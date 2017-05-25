'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, servicoUsuarios){

  servicoUsuarios.teste();

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
    $scope.novoUsuario = $scope.usuarios.find(function(user, index){
      return user.selecionado;
    });
    $scope.adicionandoUsuario = true;
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

  $scope.salvarNovoUsuario = function(usuario){
    console.log(usuario);
    if(!usuario.id){
      usuario.id = incrementaId++;
      $scope.usuarios.push(usuario);
      $scope.adicionandoUsuario = false;
    }else{
      $scope.novoUsuario = null;
      $scope.adicionandoUsuario = false;
    }
  }
});
