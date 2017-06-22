angular
  .module('angularSPA')
  .controller('listaUsuariosController',
    function($scope, $state, manterUsuariosServico) {

      console.log('Iniciando o listaUsuariosController');

      $scope.titulo = "Usuários";

      // this.$onInit = function() {
      function carregaListaDeUsuarios() {
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
