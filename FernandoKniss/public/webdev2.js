
    $scope.titulo = "Usuarios";
    $scope.usuarios = [
      {
      id = 1,


    'use strict';

    var app = angular.module('webdev-2', []);
    app.controller('mainController', function($scope) {
      var incrementaId = 1;

      $scope.titulo = "Usuários";
      $scope.usuarios = [
        {
          id: incrementaId++,
          username = "Kratos",
          password = "666",
          age = "25",
          email = "guerra@gmail.com"
        },
        {
          id: incrementaId++,
          username = "Ze da Penha",
          password = "111111",
          age = "10",
          email = "ze@gmail.com"
        },
        {
          id: incrementaId++,
          username: "tibursio",
          password: "12345",
          age: 89,
          email: "tibursio@quase.com"
        },
        {
          id: incrementaId++,
          username = "Fernando",
          password = "123123",
          age = "20",
          email = "fernando@gmail.com"
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

      $scope.selecionaUsuario = function(usuario) {
        $scope.usuarios.forEach(function(user) {
          user.selecionado = false;
        })
        usuario.selecionado = !usuario.selecionado;
      }

    })
