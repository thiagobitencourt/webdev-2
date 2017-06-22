angular
  .module('angularSPA')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/error');

    let novoUsuarioState = {
      name: 'novoUsuario',
      url: '/novoUsuario',
      templateUrl: '/src/view/novoUsuario.html',
      controller: 'novoUsuarioController'
    }

    let listaUsuariosState = {
      name: 'listaUsuarios',
      url: '/',
      templateUrl: '/src/view/listaUsuarios.html',
      controller: 'listaUsuariosController'
    }

    let errorState = {
      name: 'error',
      url: '/error',
      templateUrl: '/src/view/error.html'
    }

    $stateProvider.state(novoUsuarioState);
    $stateProvider.state(listaUsuariosState);
    $stateProvider.state(errorState);
  });
