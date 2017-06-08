'use strict';

app = angular.module('webdev-2')
  .service('servicoProdutos', function($http) {
    var incrementaId = 1;
    var Produtos = [
      {
        id: incrementaId++,
        nome: "nuts banana brasil",
        codigo: "1",
        quantidade: 25
      },
      {
        id: incrementaId++,
        nome: "betoneira",
        codigo: "2",
        quantidade: 1
      },
      {
        id: incrementaId++,
        nome: "arame",
        codigo: "3",
        quantidade: 10
      }
    ];

    return {
      obterProdutos: function() {
        return $http.get('http://localhost:3000/produto');
      },
      salvarProduto: function(produto) {
        if(!produto._id) {
          return $http.post('http://localhost:3000/produto', produto);
        } else {
          return $http.put('http://localhost:3000/produto/' + produto._id, produto)
        }
      },
      excluirProduto: function(produto) {
        return $http.delete('http://localhost:3000/produto/' + produto._id);
      }
    }
  });
