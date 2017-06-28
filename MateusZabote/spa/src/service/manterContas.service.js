angular
  .module('angularSPA')
  .service('manterContasServico', function($q){
    var listaDeContas = [
      
    ];
    var incrementadorDeIds = 1;

    var servico = {
      obterContas: obterContas,
      salvarConta: salvarConta,
      deletarConta: deletarConta

    }
    return servico;

    function obterContas() {
      var deferred = $q.defer();
      deferred.resolve(listaDeContas);
      return deferred.promise;
    }

    function salvarConta(conta){
      var deferred = $q.defer();
      if(conta){

      if(conta._id){
          var contaOriginal = listaDeContas.find(function(cont){
          return cont._id === conta._id;
        })
        var index = listaDeContas.indexOf(contaOriginal);
        if(index > -1){
          listaDeContas.splice(index, 1 , conta);
        }
      }else{
        conta._id= incrementadorDeIds++;
        listaDeContas.push(conta);
      }
      deferred.resolve();
    }else{
      deferred.reject();
    }

        return deferred.promise;
    }

    function deletarConta(conta){
      var deferred = $q.defer();

      const index = listaDeContas.indexOf(conta);
      if(index >- 1){
        listaDeContas.splice(index, 1);
        deferred.resolve();
      }
      return deferred.promise;
    }
  });
