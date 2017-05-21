'use strict';

angular.module('webdev-2', [])
  
  .controller('mainController', ($scope) => {

    $scope.usuarios = []
    
    $scope.adicionarNovoUsuario = (usuario) => {
      usuario.id = $scope.usuarios.length + 1;
      console.log('cheguei nessa merda')
      $scope.usuarios.push(usuario);
      $scope.adicionandoNovoUsuario = false;
    }

    $scope.adicionarUsuario = () => {
      $scope.adicionandoNovoUsuario = true;
    }

    $scope.excluirUsuario = () => {

    }

    $scope.editarUsuario = () => {

    }
  });