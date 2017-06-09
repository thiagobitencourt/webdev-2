'use strict';

var app = angular.module('webdevContaBancaria', []);

app.controller('mainController',['$scope', '$http',function($scope, $http){

  $scope.contaBancarias;

  $scope.adicionarContaBancaria = function(){
    $scope.adicionandoContaBancaria = true;
  }

  $scope.sacarContaBancaria = function(){

    var contaBancariaEditavel = $scope.contaBancarias.find(function(user, index) {
      return user.selecionado;
    });
    $scope.contaBancariaEdt = angular.copy(contaBancariaEditavel);
    $scope.sacandoContaBancaria = true;
  }

  $scope.depositarContaBancaria = function(){

    var contaBancariaEditavel = $scope.contaBancarias.find(function(user, index) {
      return user.selecionado;
    });
    $scope.contaBancariaEdt = angular.copy(contaBancariaEditavel);

    $scope.depositandoContaBancaria = true;
  }

  $scope.transferirContaBancaria = function(){

    var contaBancariaEditavel = $scope.contaBancarias.find(function(user, index) {
      return user.selecionado;
    });
    $scope.contaBancariaEdt = angular.copy(contaBancariaEditavel);

    $scope.transferindoContaBancaria = true;
  }

  $scope.selecionaContaBancaria = function(contaBancaria){
    $scope.contaBancarias.forEach(function(conta){
      conta.selecionado = false;
    });
    contaBancaria.selecionado = !contaBancaria.selecionado;
  }

  $scope.excluirContaBancaria = function(){
    var input =[];
    var id;
    $scope.contaBancarias.forEach(function(contaBancaria, index){
      if(contaBancaria.selecionado === true){
        id = contaBancaria._id;
      }
    });
    var urlDelete = '/contaBancaria/' + id;
    $http.delete(urlDelete, input)
    .then(
      function(response){
      },
      function(response){
      }
    );
    $scope.atualizaLista();
    $scope.adicionandoContaBancaria = false;
  }

  $scope.salvarNovoContaBancaria = function(contaBancaria){
    var urlPostAdd = '/contaBancaria';
    if(!contaBancaria._id) {
      contaBancaria.conta = Math.floor(Math.random() * 10000);
    };

    console.log(contaBancaria.conta);

    if(!contaBancaria._id) {
      $http.post('http://localhost:3000/contaBancaria', contaBancaria);
    } else {
      $http.put('http://localhost:3000/contaBancaria/' + contaBancaria._id, contaBancaria)
    }
    $scope.atualizaLista();
    $scope.novoContaBancaria = null;
    $scope.adicionandoContaBancaria = false;
  }

  $scope.sacarDaContaBancaria = function(contaBancaria, valor){

    contaBancaria.saldo = contaBancaria.saldo - valor;
    console.log("teste "+ contaBancaria.saldo + " - valor - "+valor+" id "+contaBancaria._id);

    console.log("teste nome "+ contaBancaria.nome);

    $http.put('http://localhost:3000/contaBancaria/' + contaBancaria._id, contaBancaria)

    $scope.atualizaLista();
    $scope.sacandoContaBancaria = false;
  }

  $scope.depositarNaContaBancaria = function(contaBancaria, valor){
    var urlPostAdd = '/contaBancaria';

    contaBancaria.saldo = contaBancaria.saldo + valor;
    console.log("teste deposito "+ contaBancaria.saldo + " - valor - "+valor+" id "+contaBancaria._id);

    $http.put('http://localhost:3000/contaBancaria/' + contaBancaria._id, contaBancaria)

    $scope.atualizaLista();
    $scope.depositandoContaBancaria = false;
  }

  $scope.transferirDaContaBancaria = function(contaBancariaOrigem, contaDestino, valor){
    var urlGetConta = '/contaBancaria/contaDestino';

    console.log("origem "+contaBancariaOrigem.conta);
    console.log("destinos "+contaDestino);
    $http.get('http://localhost:3000/contaBancaria/'+contaDestino).then(function(response) {
      contaBancariaDestino = response.data;
      console.log("dentro da conta");
    }, function(err) {
      console.log(err);
    });

    //console.log("destino "+contaBancariaDestino.nome);
    /*
    $http.put('http://localhost:3000/contaBancaria/' + contaBancaria._id, contaBancaria)

    $scope.atualizaLista();
    $scope.novoContaBancaria = null;
    $scope.adicionandoContaBancaria = false;
    */
  }

  $scope.atualizaLista = function(){
    var urlGetAll = '/contaBancaria';
    $http.get(urlGetAll).then(function(response) {
      $scope.contaBancarias = response.data;
    }, function(err) {
      console.log(err);
    });
  }

  $scope.editarContaBancaria = function() {
    var contaBancariaEditavel = $scope.contaBancarias.find(function(user, index) {
      return user.selecionado;
    });
    $scope.novoContaBancaria = angular.copy(contaBancariaEditavel);
    $scope.adicionandoContaBancaria = true;
  }

  var urlGetAll = '/contaBancaria';
  $http.get(urlGetAll).then(function(response) {
    $scope.contaBancarias = response.data;
  }, function(err) {
    console.log(err);
  });
}]);
