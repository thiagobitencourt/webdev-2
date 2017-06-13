'use strict';

// Criamos um módulo Angular chamado listaContatos
var listaTitulares = angular.module('listaTitulares', []);

function mainController($scope, $http) {

    // Quando acessar a página, carrega todos os contatos e envia para a view($scope)
    var refresh = function (){
        $http.get('/api/contas')
            .success(function(data) {
                $scope.titular = data;
                $scope.form = {};
                console.log("titular: ", data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    refresh();

    // Quando clicar no botão Criar, envia informações para a API Node
    $scope.criarTitular = function() {
        $http.post('/api/contas', $scope.formTitular)
            .success(function(data) {
                // Limpa o formulário para criação de outros contatos
                $scope.formTitular = {};
                $scope.contatos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Ao clicar no botão Remover, deleta o contato
    $scope.deletarTitular = function(id) {
        $http.delete('/api/contas/' + id)
            .success(function(data) {
                $scope.titular = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Ao clicar no botão Editar, edita o contato
    $scope.editarTitular = function(id) {
        $http.get('/api/contas/' + id)
            .success(function(data) {
                $scope.formTitular = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Recebe o JSON do contato para edição e atualiza
    $scope.atualizarTitular = function() {
        $http.put('/api/contas/' + $scope.formTitular._id, $scope.formTitular)
        .success( function(response){
            refresh();
        });
    };

    $scope.depositarValor = function() {
      $http.put('/api/contas/' + $scope.formTitular._id, $scope.formTitular)
      .success( function(response) {
        refresh();
      });
    };

    $scope.sacarValor = function() {
      $http.put('/api/contas/' + $scope.formTitular._id, $scope.formTitular)
      .success( function(response) {
        refresh();
      });
    };

    $scope.transferirValor = function() {
      $http.put('/api/contas/' + $scope.formTitular._id, $scope.formTitular)
      .success( function(response) {
        refresh();
      });
    };

}
