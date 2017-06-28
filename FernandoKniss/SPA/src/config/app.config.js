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

    let novaContaBancariaState = {
      name: 'novaContaBancaria',
      url: '/novaContaBancaria',
      templateUrl: '/src/view/novaContaBancaria.html',
      controller: 'novaContaBancariaController',
      params: {
        contaBancaria: undefined
      }
    }

    let listaContasBancariasState = {
      name: 'listaContasBancarias',
      url: '/listaContasBancarias',
      templateUrl: '/src/view/listaContasBancarias.html',
      controller: 'listaContasBancariasController'
    }

    let sacarState = {
      name: 'sacar',
      url: '/sacar',
      templateUrl: '/src/view/sacar.html'
    }

    let depositarState = {
      name: 'depositar',
      url: '/depositar',
      templateUrl: '/src/view/depositar.html'
    }

    let transferirState = {
      name: 'transferir',
      url: '/transferir',
      templateUrl: '/src/view/transferir.html'
    }


    $stateProvider.state(novoUsuarioState);
    $stateProvider.state(listaUsuariosState);
    $stateProvider.state(errorState);
    $stateProvider.state(padraoState);
    $stateProvider.state(novoProdutoState);
    $stateProvider.state(listaProdutosState);
    $stateProvider.state(novaContaBancariaState);
    $stateProvider.state(listaContasBancariasState);
    $stateProvider.state(sacarState);
    $stateProvider.state(transferirState);
    $stateProvider.state(depositarState);
  });
