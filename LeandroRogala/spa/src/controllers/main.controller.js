angular.module('angularSPA').controller('mainController', function($scope, $state, manterUsuariosServico){

  $scope.titulo = "Usuários";

  this.$onInit = function(){
    manterUsuariosServico.obterUsuarios().then(function(listaDeUsuarios){
      $scope.usuarios = listaDeUsuarios;
    });
  }

  $scope.adicionarUsuario = function(){
    $state.go('novoUsuario');
  };

  $scope.deletarUsuario = function(user){
    manterUsuariosServico.deletarUsuario(user).then(function(){
    });
  };

  $scope.editarUsuario = function(user){
    var obj = {
      usuario: angular.copy(user)
    }
    $state.go('novoUsuario', obj);
  };

});
