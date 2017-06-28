angular
.module('angularSPA')
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/error');

  let novoUsuarioState = {
    name: 'novoUsuario',
    url: '/novoUsuario',
    templateUrl: '/src/view/novoUsuario.html',
    controller: 'novoUsuarioController',
    params:{
      usuario: undefined
    }
  }

  let listaUsuariosState = {
    name: 'listaUsuarios',
    url: '/listaUsuarios',
    templateUrl: '/src/view/listaUsuarios.html',
    controller: 'listaUsuariosController'
  }

  let novoProdutoState = {
    name: 'novoProduto',
    url: '/novoProduto',
    templateUrl: '/src/view/novoProduto.html',
    controller: 'novoProdutoController',
    params:{
      produto: undefined
    }
  }

  let listaProdutosState = {
    name: 'listaProdutos',
    url: '/listaProdutos',
    templateUrl: '/src/view/listaProdutos.html',
    controller: 'listaProdutosController'
  }

  let novaContaState = {
    name: 'novaConta',
    url: '/novaConta',
    templateUrl: '/src/view/novaConta.html',
    controller: 'novaContaController',
    params:{
      usuario: undefined
    }
  }

  let listaContasState = {
    name: 'listaContas',
    url: '/listaContas',
    templateUrl: '/src/view/listaContas.html',
    controller: 'listaContasController'
  }

  let sacar = {
    name: 'sacar',
    url: '/sacar',
    templateUrl: '/src/view/sacar.html',
    controller: 'listaProdutosController'
  }

  let depositar = {
    name: 'depositar',
    url: '/depositar',
    templateUrl: '/src/view/depositar.html',
    controller: 'listaProdutosController'
  }

  let transferir = {
    name: 'transferir',
    url: '/transferir',
    templateUrl: '/src/view/transferir.html',
    controller: 'listaProdutosController'
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

  $stateProvider.state(novoUsuarioState);
  $stateProvider.state(listaUsuariosState);
  $stateProvider.state(novoProdutoState);
  $stateProvider.state(listaProdutosState);
  $stateProvider.state(novaContaState);
  $stateProvider.state(listaContasState);
  $stateProvider.state(sacar);
  $stateProvider.state(depositar);
  $stateProvider.state(transferir);
  $stateProvider.state(errorState);
  $stateProvider.state(padraoState);
});
