'use strict';

var app = angular.module('oficial-ii', []);
app.controller('mainController', function($scope, service) {
  $scope.title = "Contas bancárias";
  $scope.newConta = {};

  $scope.isViewing = true;
  $scope.isSacando = false;
  $scope.isDeposiando = false;
  $scope.isTransferindo = false;

  $scope.isAdicionando = true;
  
  const fetchAccounts = () => {
    service.fetchAccounts().then(function(resp) {
      $scope.contas = resp.data;
    }).catch(function(err) {
      $scope.title = "Erro ao encontrar contas bancarias!";
    });
  };

  $scope.novaConta = () => {
    $scope.isAdicionando = true;
    $scope.newConta.nomeTitular = "";
    $scope.newConta.cpfTitular = "";
    $scope.newConta.email = "";
    $scope.newConta.nrConta = "";
    $scope.newConta.saldoAtual = 0.00;
  };

  $scope.editar = (newConta) => {
    $scope.isAdicionando = false;
    $scope.newConta = newConta;
  };

  $scope.saveConta = (newConta) => {
    service.saveConta(newConta).then(function(resp) {
      fetchAccounts();
      $scope.newConta = {};
      $scope.isAdicionando = true;
    }).catch(err => console.log(err));
  };

  $scope.deletar = (conta) => {
    service.removerConta(conta).then(function(resp) {
      fetchAccounts();
    });
  };

  $scope.goContas = () => {
    $scope.isViewing = true;
    $scope.isSacando = false;
    $scope.isDeposiando = false;
    $scope.isTransferindo = false;
  }
  
  $scope.gotSaque = () => {
    $scope.isViewing = false;
    $scope.isSacando = true;
    $scope.isDeposiando = false;
    $scope.isTransferindo = false;
  }
  
  $scope.goDeposito = () => {
    $scope.isViewing = false;
    $scope.isSacando = false;
    $scope.isDeposiando = true;
    $scope.isTransferindo = false;
  }
  
  $scope.goTransferencia = () => {
    $scope.isViewing = false;
    $scope.isSacando = false;
    $scope.isDeposiando = false;
    $scope.isTransferindo = true;
  }

  fetchAccounts();
});