angular
  .module('angularSPA')
  .service('manterProdutosServico', function($q){
    var listaDeProdutos = [
      {
        _id:2,
        nome:"chocolate",
        codigo:12,
        quant:300,
        dispo:"sim"
      }
    ];
    var incrementadorDeIds = 1;

    var servico = {
      obterProdutos: obterProdutos,
      salvarProduto: salvarProduto,
      deletarProduto: deletarProduto

    }
    return servico;

    function obterProdutos() {
      var deferred = $q.defer();
      deferred.resolve(listaDeProdutos);
      return deferred.promise;
    }

    function salvarProduto(produto){
      var deferred = $q.defer();
      if(produto){

      if(produto._id){
          var produtoOriginal = listaDeProdutos.find(function(pro){
          return pro._id === produto._id;
        })
        var index = listaDeProdutos.indexOf(produtoOriginal);
        if(index > -1){
          listaDeProdutos.splice(index, 1 , produto);
        }
      }else{
        produto._id= incrementadorDeIds++;
        listaDeProdutos.push(produto);
      }
      deferred.resolve();
    }else{
      deferred.reject();
    }

        return deferred.promise;
    }

    function deletarProduto(produto){
      var deferred = $q.defer();

      const index = listaDeProdutos.indexOf(produto);
      if(index >- 1){
        listaDeProdutos.splice(index, 1);
        deferred.resolve();
      }
      return deferred.promise;
    }
  });
