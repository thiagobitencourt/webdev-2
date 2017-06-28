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


//padrão
  let padraoState = {
    name: 'padrao',
    url: '/',
    templateUrl: '/src/view/padrao.html'
  }

//error
  let errorState = {
    name: 'error',
    url: '/error',
    templateUrl: '/src/view/erro.html'
  }


  // Produtos
  let novoProdutoState = {
    name: 'novoProduto',
    url: '/novoProduto',
    templateUrl: '/src/view/novoProduto.html',
    controller: 'novoProdutoController',
    params: {
      produto: undefined
    }
  }

  let listaProdutosState = {
    name: 'listaProdutos',
    url: '/listaProdutos',
    templateUrl: '/src/view/listaProdutos.html',
    controller: 'listaProdutosController'
  }


  // Contas
  let novaContaState = {
    name: 'novaConta',
    url: '/novaConta',
    templateUrl: '/src/view/novaConta.html',
    controller: 'novaContaController',
    params: {
      conta: undefined
    }
  }

  let listaContasState = {
    name: 'listaContas',
    url: '/listaContas',
    templateUrl: '/src/view/listaContas.html',
    controller: 'listaContasController'
  }

  let sacarContasState = {
    name: 'sacarContas',
    url: '/sacarContas',
    templateUrl: '/src/view/sacar.html',
    controller: 'listaContasController'
  }

  let depositarContasState = {
    name: 'depositarContas',
    url: '/depositarContas',
    templateUrl: '/src/view/depositar.html',
    controller: 'listaContasController'
  }

  let transferirContasState = {
    name: 'transferirContas',
    url: '/transferirContas',
    templateUrl: '/src/view/transferir.html',
    controller: 'listaContasController'
  }





  $stateProvider.state(novoUsuarioState);
  $stateProvider.state(listaUsuariosState);
  $stateProvider.state(errorState);
  $stateProvider.state(padraoState);
  $stateProvider.state(novoProdutoState);
  $stateProvider.state(listaProdutosState);
  $stateProvider.state(novaContaState);
  $stateProvider.state(listaContasState);
  $stateProvider.state(sacarContasState);
  $stateProvider.state(depositarContasState);
  $stateProvider.state(transferirContasState);


});
