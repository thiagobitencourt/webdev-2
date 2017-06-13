'use strict';

app = angular.module('CrudConta').service('servicoContas', function($http){

  return{
    getAll: function(){
      return $http.get('/conta');
    },
    saveConta: function(conta){
      if(!conta._id){
        return $http.post('/conta', conta);
      }else{
        return $http.put('/conta/'+conta._id, conta)
      }
    },
    deleteConta: function(conta){
      return $http.delete('/conta/'+conta._id);
    }
  }
});
