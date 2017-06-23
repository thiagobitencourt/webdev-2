angular
  .module('angularSPA')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/error');

    let novoUsuarioState = {
      name: 'novoUsuario',
      url: '/novoUsuario',
      templateUrl: '/src/view/novoUsuario.html',
      controller: 'novoUsuarioController',
      params: {
        usuario: undefined
      }
    }

    let listaUsuariosState = {
      name: 'listaUsuarios',
      url: '/listaUsuarios',
      templateUrl: '/src/view/listaUsuarios.html',
      controller: 'listaUsuariosController'
    }

    let errorState = {
      name: 'error',
      url: '/error',
      templateUrl: '/src/view/error.html'
    }

      let padraoState = {
        name: 'padrao',
        url: '/',
        templateUrl: '/src/view/padrao.html'
      }


    $stateProvider.state(padraoState);
    $stateProvider.state(novoUsuarioState);
    $stateProvider.state(listaUsuariosState);
    $stateProvider.state(errorState);
  });
