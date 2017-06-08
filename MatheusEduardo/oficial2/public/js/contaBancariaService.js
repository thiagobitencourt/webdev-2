
app.module('prova').service('contaBancariaService', ($http) => {

  const baseUrl = 'localhost:8080/';

  return {

    obterContasBancarias: function() {
      return $http.get(baseUrl + 'contaBancaria');
    },

    obterContaBancaria: function(numeroDaConta) {

    },

    criarContaBancaria: function(contaBancaria) {
      if(!contaBancaria._id) {
        return $http.post(baseUrl + 'contaBancaria', contaBancaria);
      } else {
        return $http.put(baseUrl + '/contaBancaria' + contaBancaria._id, contaBancaria);
      }
    },

    removerContaBancaria: function(id) {

    },


  }
});