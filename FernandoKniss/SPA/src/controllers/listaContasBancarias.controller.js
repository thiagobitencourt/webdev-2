angular
  .module('angularSPA')
  .controller('listaContasBancariasController',
    function ($scope, $state, manterContasBancariasServico) {

      console.log('Iniciando o listaContasBancariasController');

      $scope.titulo = "Conta Bancária";

      function carregaListaDeContasBancarias() {
        //Assincrona, ou seja, retorna uma promessa
        manterContasBancariasServico.obterContasBancarias()
        .then(function (listaDeContasBancarias) {
          $scope.contasBancarias = listaDeContasBancarias;
        });
      }
        carregaListaDeContasBancarias();

      $scope.adicionarContaBancaria = function () {
        console.log("Vou adicionar uma nova Conta")
        $state.go('novaContaBancaria');
      }

      $scope.deletarContaBancaria = function (contaBancaria) {
        manterContasBancariasServico.deletarContasBancarias(contaBancaria)
        .then(function () {
          console.log("Conta Bancaria removido com sucesso!!")
        })
      }

      $scope.editarContaBancaria = function (contaBancaria) {
        var param = {
          contaBancaria: angular.copy(contaBancaria)
        }
        $state.go('novaContaBancaria', param);
      }
    })
