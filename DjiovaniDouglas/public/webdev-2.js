'use strict';

(() => {
  const app = angular.module('webdev-2', []);

  app.controller('mainController', ($scope) => {

    $scope.usuarios = [
      {
        username: "Djiovani",
        password: "123456",
        age: 25,
        email: "teste@example.com"
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
    $scope.removerUsuario = (username) => {
      const currentUser = $scope.usuarios.find(user => user.username === username);
      if(currentUser) {
        $scope.usuarios.splice($scope.usuarios.indexOf(currentUser), 1);
        return true;
      }
      return false;
    }
  });
})();
