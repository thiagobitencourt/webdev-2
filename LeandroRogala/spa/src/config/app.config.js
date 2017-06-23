angular.module('angularSPA').config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/error');

  let novoUsuarioState = {
    name: 'novoUsuario',
    url: '/novoUsuario',
    templateUrl: '/src/view/novoUsuario.html',
    controller: 'novoUsuarioController',
    params: {
      usuario: undefined
    }
  };

  let listaUsuariosState = {
    name: 'listaUsuarios',
    url: '/listaUsuarios',
    controller: 'listaUsuariosController',
    templateUrl: '/src/view/listaUsuarios.html'
  };

  let errorState = {
    name: 'error',
    url: '/error',
    templateUrl: '/src/view/erro.html'
  }

  let bemVindoState = {
    name: 'bemVindo',
    url: '/',
    templateUrl: '/src/view/padrao.html'
  }

  $stateProvider.state(novoUsuarioState);
  $stateProvider.state(listaUsuariosState);
  $stateProvider.state(errorState);
  $stateProvider.state(bemVindoState);


});
