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
$scope.deletarUsuario = function(usuario) {
manterUsuariosServico.deletarUsuario(usuario)
.then(function () {
  console.log("Usuário removido com sucesso")

})
}

$scope.editarUsuario = function(usuario) {
  //Mudar para a tela que tem o formulário, passando
  var param = {
    usuario: angular.copy(usuario)
  }
  $state.go('novoUsuario', param);

  }
})
