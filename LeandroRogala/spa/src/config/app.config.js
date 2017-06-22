angular.module('angularSPA').config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/error');

  let novoUsuarioState = {
    name: 'novoUsuario',
    url: '/novoUsuario',
    templateUrl: '/src/view/novoUsuario.html',
    controller: 'novoUsuarioController'
  };

  let listausuariosState = {
    name: 'listaUsuarios',
    url: '/',
    controller: 'mainController',
    templateUrl: '/src/view/listaUsuarios.html'
  };

  let errorState = {
    name: 'error',
    url: '/error',
    templateUrl: '/src/view/erro.html'
  }

  $stateProvider.state(novoUsuarioState);
  $stateProvider.state(listausuariosState);
  $stateProvider.state(errorState);


});
