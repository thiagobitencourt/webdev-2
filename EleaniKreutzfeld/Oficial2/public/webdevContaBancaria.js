'use strict';

var app = angular.module('webdevContaBancaria', []);

app.controller('mainController',['$scope', '$http',function($scope, $http){

  $scope.contaBancarias;

  $scope.adicionarContaBancaria = function(){
    $scope.adicionandoContaBancaria = true;
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
    }
    var dataObj = {
      nome : contaBancaria.nome,
      cpf : contaBancaria.cpf,
      email : contaBancaria.email,
      conta : contaBancaria.conta,
      saldo : contaBancaria.saldo
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
