'use strict';

app = angular.module('webdev-2')
  .service('productService', function($http) {

    return {
      fetchProducts: function() {
        return $http.get('http://localhost:3000/produto');
      },
      saveProduct: function(product) {
        if(!product._id) {
          return $http.post('http://localhost:3000/produto', product);
        } else {
          return $http.put('http://localhost:3000/produto/' + product._id, product);
        }
      },
      removeProduct: function(product) {
        return $http.delete('http://localhost:3000/produto/' + product._id);
      }
    }
  
  });
