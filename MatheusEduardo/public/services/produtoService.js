'use strict';

app = angular.module('webdev-2')
.service('productService', function($http) {

  return {
    obterProdutos: function() {
      return $http.get('http://localhost:3000/produto');
    },
    
    salvarProduto: function(produto) {
      if (!produto._id) {
        return $http.post('http://localhost:3000/produto', produto);
      } else {
        return $http.put(`http://localhost:3000/produto/${produto._id}`, produto);
      }
    },

    excluirProduto: function(produto) {
      return $http.delete(`http://localhost:3000/produto/${produto._id}`);
    }
  }
});