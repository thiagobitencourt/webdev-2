angular
  .module('angularSPA')
  .controller('listaContasController',
    function($scope, $state, manterContasServico) {
      $scope.titulo = "Contas Bancárias";

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



      $scope.deletarConta = function(conta){
        manterContasServico.deletarConta(conta)
        .then(function(){
          console.log("conta removida com sucesso! ");
        })
      }

      $scope.editarConta = function(conta){

        var param = {
          conta: angular.copy(conta)
        }

        $state.go("novaConta", param);

      }


      $scope.sacarContas = function() {
        console.log("vou sacar da conta");
        $state.go('sacarContas');
      }

      $scope.depositarConta = function() {
        console.log("vou depositar na conta");
        $state.go('depositarConta');
      }

      $scope.transferirConta = function() {
        console.log("vou transferir");
        $state.go('transferirContas');
      }
    })
