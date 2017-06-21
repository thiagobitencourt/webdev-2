var app = angular.module('angularSPA', ['ui.router']);

app.controller('listaUsuariosController',
  function($scope, $state, manterUsuariosServico) {
    $scope.titulo = "Usuários";

    // this.$onInit = function() {
    function carregaListaDeUsuarios() {
      console.log('on init')
      // Assincrona, ou seja, retorna uma promessa.
      manterUsuariosServico.obterUsuarios()
      .then(function(listaDeUsuarios) {
        $scope.usuarios = listaDeUsuarios;
      });
    }
    carregaListaDeUsuarios();

    $scope.adicionarUsuario = function() {
      console.log("vou adicionar um novo usuário");
      $state.go('novoUsuario');
    }
  })

app.service('manterUsuariosServico', function($q){
  var listaDeUsuarios = [];

  var servico = {
    obterUsuarios: obterUsuarios
  }
  return servico;

  // É uma função assincrona, ou seja, retorna uma promessa
  function obterUsuarios() {
    // return $http.get('/usuarios'); // Também é assincrono, ou seja, retorna uma promessa
    var deferred = $q.defer();
    deferred.resolve(listaDeUsuarios);
    return deferred.promise;
  }
});

app.controller('novoUsuarioController',
  function($scope, $state) {

    function salvarNovoUsuario(usuario) {
      console.log(usuario);
      // Mecanismo para salvar o novo usuário
      $state.go('listaUsuarios');
    }

    function limparCampos() {
      $scope.novoUsuario = undefined;
    }

    $scope.salvarNovoUsuario = salvarNovoUsuario;
    $scope.limparCampos = limparCampos;
  })

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/error');

  let novoUsuarioState = {
    name: 'novoUsuario',
    url: '/novoUsuario',
    templateUrl: 'novoUsuario.html',
    controller: 'novoUsuarioController'
  }

  let listaUsuariosState = {
    name: 'listaUsuarios',
    url: '/',
    templateUrl: 'listaUsuarios.html',
    controller: 'listaUsuariosController'
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
