angular
.module('angularSPA')
.controller('listaContasController',
  function($scope, $state, manterContasServico) {
    $scope.titulo = "Contas";

    // this.$onInit = function() {
    function carregaListaDeContas() {
      console.log('on init')
      // Assincrona, ou seja, retorna uma promessa.
      manterContasServico.obterContas()
      .then(function(listaDeContas) {
        $scope.contas = listaDeContas;
      });
    }
    carregaListaDeContas();

    $scope.adicionarConta = function() {
      console.log("vou adicionar uma nova conta");
      $state.go('novaConta');
    }
$scope.deletarConta = function(conta) {
manterContasServico.deletarConta(conta)
.then(function () {
  console.log("Conta removida com sucesso")

})
}

$scope.editarConta = function(conta) {
  //Mudar para a tela que tem o formulário, passando
  var param = {
    conta: angular.copy(conta)
  }
  $state.go('novaConta', param);

  }

  $scope.sacarConta = function() {
    console.log("sacando da conta...");
    $state.go('novaConta');
  }

  $scope.depositarConta = function() {
    console.log("depositando na conta...");
    $state.go('novaConta');
  }

  $scope.transferirConta = function() {
    console.log("transferindo para conta...");
    $state.go('novaConta');
  }

})
