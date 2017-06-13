'use strict';

app = angular.module('webdevContaBancaria')
  .service('servicoContaBancarias', function($http) {
    var incrementaId = 1;

    return {
      obterContaBancaria: function() {
        return $http.get('http://localhost:3000/contaBancaria');
      },
      salvarContaBancaria: function(contaBancaria) {
        if(!contaBancaria._id) {
          return $http.post('http://localhost:3000/contaBancaria', contaBancaria);
        } else {
          return $http.put('http://localhost:3000/contaBancaria/' + contaBancaria._id, contaBancaria)
        }
      },
      excluirContaBancaria: function(contaBancaria) {
        return $http.delete('http://localhost:3000/contaBancaria/' + contaBancaria._id);
      }
    }
  });
