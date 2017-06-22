angular
.module('angularSPA')
.controller('listaUsuariosController',
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
