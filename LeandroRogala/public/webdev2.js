'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, servicoUsuarios){

  $scope.usuarios = servicoUsuarios.obterUsuarios();

  $scope.titulo = "Usuários";

  $scope.adicionarUsuario = function(){
    console.log("adicionarUsuario");
    $scope.adicionandoUsuario = true;
  }

  $scope.excluirUsuario = function(){
    var usuarioSelecionado = $scope.usuarios.find(function(user, index){
      return user.selecionado;
    });
    servicoUsuarios.excluirUsuario(usuarioSelecionado);
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
    servicoUsuarios.salvarUsuario(usuario);
    $scope.novoUsuario = null;
    $scope.adicionandoUsuario = false;
    }
});
