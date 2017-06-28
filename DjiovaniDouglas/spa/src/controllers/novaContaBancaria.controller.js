angular
  .module('angularSPA')
  .controller('novaContaBancariaController',
    function($scope, $state, $stateParams, manterContasBancariasServico) {

      if ($stateParams.contaBancaria) {
        console.log("Recebi uma Conta Bancaria por parametro");
        $scope.novaContaBancaria = $stateParams.contaBancaria;
      }

      function salvarNovaContaBancaria(contaBancaria) {
        console.log(contaBancaria);



        
        manterContasBancariasServico.salvarContasBancarias(contaBancaria)
        .then(function () {
          $state.go('listaContasBancarias');
        })
        .catch(function () {
          console.log("Não há uma Conta Bancaria para ser salvo")
        });
      }

      function limparCampos() {
        $scope.novaContaBancaria = undefined;
      }

      $scope.salvarNovaContaBancaria = salvarNovaContaBancaria;
      $scope.limparCampos = limparCampos;
    })
