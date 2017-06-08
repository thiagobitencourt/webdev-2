'use strict';

app = angular.module('apiCrudProduto').service('servicoProdutos', function($http){

  return{
    getAll: function(){
      return $http.get('/produto');
    },
    saveProduto: function(produto){
      if(!produto._id){
        return $http.post('/produto', produto);
      }else{
        return $http.put('/produto/'+produto._id, produto)
      }
    },
    deleteProduto: function(produto){
      return $http.delete('/produto/'+produto._id);
    }
  }
});
