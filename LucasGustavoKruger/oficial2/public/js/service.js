'use strict';

app = angular.module('oficial-ii')
  .service('service', function($http) {

  return {
    fetchAccounts: () => {
      return $http.get('http://localhost:3000/conta');
    },
    saveConta: (conta) => {
      if(!conta._id) {
        return $http.post('http://localhost:3000/conta', conta);
      } else {
        return $http.put('http://localhost:3000/conta/' + conta._id, conta);
      }
    },
    removerConta: (conta) => {
      return $http.delete('http://localhost:3000/conta/' + conta._id);
    },
    sacar: (payload) => {
      return $http.post('http://localhost:3000/saque', payload);
    },
    depositar: (payload) => {
      return $http.post('http://localhost:3000/deposito', payload);
    },
    transferir: (payload) => {
      return $http.post('http://localhost:3000/transferencia', payload);
    }
  }
});