'use strict';

angular.module('oficial2',[])
  .service('servicoContas', function($http) {
    var incrementaId = 1;
    var contas = [
      {
        id: incrementaId++,
        username: "Jivago",
        cpf: "999.999.999-99",
        email: "jivago@gmail.com",
        conta:"123"
        saldo: R$ 500,00
      },

      {
        id: incrementaId++,
        username: "Mateus",
        cpf: "888.888.888-88",
        email: "mateus@gmail.com",
        conta:"456"
        saldo: R$ 300,00
      },

      {
        id: incrementaId++,
        username: "Thiago",
        cpf: "777.777.777-77",
        email: "thiago@gmail.com",
        conta:"789"
        saldo: R$ 100,00
      }
    ];

    return {
      obterContas: function() {
        return $http.get('http://localhost:3000/conta');
      },
      salvarConta: function(conta) {
        if(!conta._id) {
          return $http.post('http://localhost:3000/conta', conta);
        } else {
          return $http.put('http://localhost:3000/conta/' + conta._id, conta)
        }
      },
      excluirConta: function(conta) {
        return $http.delete('http://localhost:3000/conta/' + conta._id);
      }
    }
  });
