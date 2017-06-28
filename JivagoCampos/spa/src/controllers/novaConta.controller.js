angular
.module('angularSPA')
.controller('novaContaController',
  function($scope, $state, $stateParams, manterContasServico) {

console.log($stateParams);

if($stateParams.conta) {
  console.log("recebi uma conta por parametro");
  $scope.novaConta  = $stateParams.conta;
}

    function salvarNovaConta(conta) {
      console.log(conta);
      // Mecanismo para salvar o novo conta
      manterContasServico.salvarConta(conta).then(function() {
        $state.go('listaContas');
      })
      .catch(function () {
        console.log('Não há contas para serem salvas')
      });
    }

    function limparCampos() {
      $scope.novaConta = undefined;
    }

    $scope.salvarNovaConta = salvarNovaConta;
    $scope.limparCampos = limparCampos;
  })
