'use strict';

(() => {
  const app = angular.module('webdev-2', []);
    
  app.controller('mainController', ($scope) => {

    $scope.usuarios = [
      {
        username: "Matheus",
        password: "eduardo",
        age: 20,
        email: "foo@example.com"
      }
    ];
    
    $scope.adicionarNovoUsuario = () => {
      $scope.novoUsuario.id = $scope.usuarios.length + 1;
      $scope.usuarios.push($scope.novoUsuario);
      $scope.adicionandoNovoUsuario = false;
      $scope.novoUsuario = {};
    }

    $scope.adicionarUsuario = () => {
      $scope.adicionandoNovoUsuario = true;
    }

    $scope.cancelarCriacao = () => {
      $scope.adicionandoNovoUsuario = false
    };

    $scope.editarUsuario = () => {
      
    }

    //TODO: Utilizar usuarioDAO.
    $scope.removerUsuario = (id) => {
      const currentUser = $scope.usuarios.find(user => user.id === id);
      if(currentUser) {
        $scope.usuarios.splice($scope.usuarios.indexOf(currentUser), 1);
        return true;
      }
      return false;
    }
  });
})();