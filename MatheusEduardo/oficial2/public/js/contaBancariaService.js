
app = angular.module('prova').service('contaBancariaService', function($http) {

  const baseUrl = 'http://localhost:8080/contaBancaria';

  return {

    obterContasBancarias: function() {
      return $http.get(baseUrl);
    },

    obterContaBancaria: function(numeroDaConta) {
      return $http.get(baseUrl + '/' + numeroDaConta._id);
    },

    criarContaBancaria: function(contaBancaria) {
      if(!contaBancaria._id) {
        return $http.post(baseUrl, contaBancaria);
      } else {
        return $http.put(baseUrl + '/' + contaBancaria._id, contaBancaria);
      }
    },

    removerContaBancaria: function(id) {
      return $http.delete(baseUrl + '/' + id);
    },

    sacar: function(id, operacao) {
      return $http.post(baseUrl + '/'+ id + '/saque', operacao);
    },

    depositar: function(id, operacao) {
      return $http.post(baseUrl + '/'+ id + '/deposito', operacao);
    },

    transferir: function(id, operacao) {
      return $http.post(baseUrl + '/'+ id + '/transferencia', operacao);
    }
  }
});