'use strict';

var app = angular.module('oficial2', []);
app.controller('mainController', function($scope, serviceConta){

  $scope.contas;

  function loading(){
    serviceConta.getAll().then(function(resultado){
      $scope.contas = resultado.data;

    })
  };

  $scope.addContas = function(){
    $scope.addConta = true;
  };

  $scope.selectConta = function(conta){
    $scope.contas.forEach(function(con){
      if(con._id === conta._id){
        conta.selecionado = !conta.selecionado;
      }else{
        con.selecionado = false;
      }
    })
  };

  $scope.saveNewConta= function(conta){
    serviceConta.saveConta(conta).then(function(resultado){
      loading();
      $scope.newConta = undefined;
      $scope.addConta = false;
    })
  };

  $scope.editConta = function(){
    var contaEditavel = $scope.contas.find(function(con, index){
      return con.selecionado;
    });
    $scope.newConta = angular.copy(contaEditavel);
    $scope.addConta = true;
  };

  $scope.deleteConta = function(){
    var contaSelecionada = $scope.contas.find(function(con, index){
      return con.selecionado;
    });
    serviceConta.deleteConta(contaSelecionada).then(function(resultado){
      loading();
    });
  }

  loading();

});
