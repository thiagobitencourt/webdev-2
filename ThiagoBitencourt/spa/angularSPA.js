var app = angular.module('angularSPA', ['ui.router']);

app.controller('mainController',
  function($scope, $state) {
    $scope.titulo = "Usuários";

    $scope.usuarios = [
      {
        _id: '123',
        username: 'fulado',
        password: 'senha123',
        age: 18,
        email: 'fulano@mail.com'
      }
    ];

    $scope.adicionarUsuario = function() {
      console.log("vou adicionar um novo usuário");
      $state.go('novoUsuario');
    }
  })

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/error');

  let novoUsuarioState = {
    name: 'novoUsuario',
    url: '/novoUsuario',
    templateUrl: 'novoUsuario.html'
  }

  let listaUsuariosState = {
    name: 'listaUsuarios',
    url: '/',
    templateUrl: 'listaUsuarios.html',
    controller: 'mainController'
  }

  let errorState = {
    name: 'error',
    url: '/error',
    templateUrl: 'error.html'
  }

  $stateProvider.state(novoUsuarioState);
  $stateProvider.state(listaUsuariosState);
  $stateProvider.state(errorState);
});
