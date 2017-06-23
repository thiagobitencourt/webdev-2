angular.module('angularSPA').controller('novoUsuarioController', function($scope, $state, $stateParams,  manterUsuariosServico){

  var verificaParametro = function(){
    if($stateParams.usuario){
      $scope.novoUsuario = $stateParams.usuario;
    }
  }

  verificaParametro();

  $scope.salvarNovoUsuario = function(novoUsuario){
    manterUsuariosServico.salvarUsuario(novoUsuario).then(function(){
      $state.go('listaUsuarios');
    }).catch(function(){
      console.log("teste")
    });
  }


  $scope.limparCampos = function(){
    $scope.novoUsuario = undefined;
  };

});
