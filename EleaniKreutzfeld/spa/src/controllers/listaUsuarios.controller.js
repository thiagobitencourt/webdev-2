angular
  .module('angularSPA')
  .controller('listaUsuariosController',
    function($scope, $state, manterUsuariosServico) {

      console.log('Iniciando o listaUsuariosController');

      $scope.titulo = "Usuários";

      function carregaListaDeUsuarios() {
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
        .then(function(){
          console.log("Usuario removido com sucesso!!")
        })
      }

      $scope.editarUsuario = function(usuario) {

        var param = {
          usuario : angular.copy(usuario)
        }
        $state.go('novoUsuario', param);

      }
    })
