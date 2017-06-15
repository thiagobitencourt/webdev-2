'use strict';

var app = angular.module('angularSPA', ['ui.router']);

app.controller('mainController', function($scope, $state){

  $scope.titulo = "Usuários";

  $scope.usuarios = [
    {
      _id: '123',
      username: 'fulano',
      password: 'senha123',
      age: 18,
      email: 'fulano@mail.com'
    }
  ];

  $scope.adicionarUsuario = function(){
    $state.go('novoUsuario');
  };
});

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/error');

  let novoUsuarioState = {
    name: 'novoUsuario',
    url: '/novoUsuario',
    templateUrl: 'novoUsuario.html'
  };

  let listausuariosState = {
    name: 'listaUsuarios',
    url: '/',
    controller: 'mainController',
    templateUrl: 'listaUsuarios.html'
  };

  let errorState = {
    name: 'error',
    url: '/error',
    templateUrl: 'erro.html'
  }

  $stateProvider.state(novoUsuarioState);
  $stateProvider.state(listausuariosState);
  $stateProvider.state(errorState);


});
