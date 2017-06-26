angular
  .module('angularSPA')
  .controller('novoUsuarioController',
  function($scope, $state, $stateParams, manterUsuariosServico) {

    console.log($stateParams);
    if($stateParams.usuario){
      console.log("recebi um usua");
      $scope.novoUsuario = $stateParams.usuario;
    }


    function salvarNovoUsuario(usuario) {
      console.log(usuario);
      // Mecanismo para salvar o novo usuário
      manterUsuariosServico.salvarUsuario(usuario)
      .then(function(){
        $state.go('listaUsuarios');
      })
      .catch(function(){
        console.log('Não há um usuario para ser salvo')
      });
    }

    function limparCampos() {
      $scope.novoUsuario = undefined;
    }

    $scope.salvarNovoUsuario = salvarNovoUsuario;
    $scope.limparCampos = limparCampos;
  })
