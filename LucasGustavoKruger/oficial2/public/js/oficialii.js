'use strict';

var app = angular.module('oficial-ii', []);
app.controller('mainController', function($scope, service) {
  $scope.title = "Contas bancárias";
  $scope.newConta = {};
  $scope.contas = [];
  $scope.isViewing = true;
  $scope.isSacando = false;
  $scope.isDeposiando = false;
  $scope.isTransferindo = false;
  $scope.erro = "";

  $scope.isAdicionando = true;
  
  $scope.goContas = () => {
    $scope.isViewing = true;
    $scope.isSacando = false;
    $scope.isDeposiando = false;
    $scope.isTransferindo = false;
    $scope.fetchAccounts();
    $scope.erro = "";
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

  $scope.fetchAccounts = () => {
    $scope.contas = [];
    service.fetchAccounts().then(function(resp) {
      $scope.contas = resp.data;
    }).catch(function(err) {
      $scope.erro = "Erro ao encontrar contas bancarias!";
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
      $scope.fetchAccounts();
      $scope.newConta = {};
      $scope.isAdicionando = true;
    }).catch(err => console.log(err));
  };

  $scope.deletar = (conta) => {
    service.removerConta(conta).then(function(resp) {
      $scope.fetchAccounts();
    });
  };

  const responseHandler = (resp) => {
    if(resp.data.error) {
      $scope.erro = resp.data.error;
    } else {
      $scope.goContas();
    }
  }

  $scope.saque = (id, montante) => {
    const payload = {
      _id: id, 
      montante: montante
    };
    service.sacar(payload).then(responseHandler);
  }

  $scope.depositar =(id, montanteDeposito) => {
    const payload = {
      _id: id, 
      montante: montanteDeposito
    };
    service.depositar(payload).then(responseHandler);
  }

  $scope.transferir = (_idOrigem, _idDestino, montanteTransferencia) => {
    const payload = {
      idOrigem: _idOrigem, 
      idDestino: _idDestino, 
      montante: montanteTransferencia
    };
    service.transferir(payload).then(responseHandler);
  }

  $scope.fetchAccounts();
});