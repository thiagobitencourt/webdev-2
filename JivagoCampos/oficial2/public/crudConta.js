'use strict';

var app = angular.module('oficial2');
app.controller('mainController', function($scope, servicoContas){

  $scope.contas;
  $scope.addConta;

  function loading(){
    servicoContas.getAll().then(function(resultado){
      $scope.contas = resultado.data;
    })
  };

  loading();

  $scope.addContas = function(){
    $scope.addConta = true;
  };

  $scope.selectConta = function(conta){
    $scope.conta.forEach(function(account){
      if(account._id === account._id){
        conta.selecionada = !conta.selecionada;
      }else{
        account.selecionada = false;
      }
    })
  };

  $scope.saveNewConta= function(conta){
    servicoContas.saveConta(conta).then(function(resultado){
      loading();
      $scope.newConta = undefined;
      $scope.addConta = false;
    })
  };

  $scope.editConta = function(){
    var contaEditavel = $scope.contas.find(function(account, index){
      return account.selecionado;
    });
    $scope.newConta = angular.copy(contaEditavel);
    $scope.addConta = true;
  };

  $scope.deleteAccount = function(){
    var contaSelecionada = $scope.contas.find(function(account, index){
      return account.selecionado;
    });
    servicoContas.deleteConta(contaSelecionada).then(function(resultado){
      loading();
    });
  }
})
