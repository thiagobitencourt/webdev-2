angular
.module('angularSPA')
.controller('novoUsuarioController',
  function($scope, $state, manterUsuariosServico) {

    function salvarNovoUsuario(usuario) {
      console.log(usuario);
      // Mecanismo para salvar o novo usuário
      manterUsuariosServico.salvarUsuario(usuario).then(function() {
        $state.go('listaUsuarios');
      });
    }

    function limparCampos() {
      $scope.novoUsuario = undefined;
    }

    $scope.salvarNovoUsuario = salvarNovoUsuario;
    $scope.limparCampos = limparCampos;
  })
