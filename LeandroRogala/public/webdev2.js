'use strict';

var app = angular.module('webdev-2', []);
app.controller('mainController', function($scope, servicoUsuarios){
  $scope.usuarios;

  function carregaUsuarios(){
    servicoUsuarios.obterUsuarios().then(function(resultado){
        $scope.usuarios = resultado.data;
    });
  }

  carregaUsuarios();

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
    var usuarioEditavel = $scope.usuarios.find(function(user, index){
      return user.selecionado;
    });
    $scope.novoUsuario = angular.copy(usuarioEditavel);
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
    servicoUsuarios.salvarUsuario(usuario).then(function(result){

    });
    $scope.novoUsuario = null;
    $scope.adicionandoUsuario = false;
    }
});
