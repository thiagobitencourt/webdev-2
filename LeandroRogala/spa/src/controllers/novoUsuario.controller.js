angular.module('angularSPA').controller('novoUsuarioController', function($scope, $state, manterUsuariosServico){

  $scope.salvarNovoUsuario = function(novoUsuario){
    manterUsuariosServico.salvarUsuario(novoUsuario).then(function(){
      $state.go('listaUsuarios');
    });
  };

  $scope.limparCampos = function(){
    $scope.novoUsuario = undefined;
  };

});
