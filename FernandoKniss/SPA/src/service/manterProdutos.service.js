angular
  .module('angularSPA')
  .service('manterProdutosServico',
    function($q) {
      var listaDeProdutos = [];

      var incrementadorDeIds = 1;

      var servico = {
        obterProdutos: obterProdutos,
        salvarProduto: salvarProduto,
        deletarProduto: deletarProduto
      }
      return servico;

      //É uma função assincrona, ou seja, retorna uma promessa
      function obterProdutos() {
        // return $http.get('/produtos'); //Também é assincrono, ou seja, retorna uma promessa
        var deferred = $q.defer();
        deferred.resolve(listaDeProdutos);
        return deferred.promise;
      }

      function salvarProduto(produto) {
        var deferred = $q.defer();
        if (produto) {
          if (produto._id) {
            //devemos atualizar o objeto
            var produtoOriginal = listaDeProdutos.find(function (prod) {
              return prod._id === produto._id;
            })
            var index = listaDeProdutos.indexOf(produtoOriginal);
            if (index > -1) {
              listaDeProdutos.splice(index, 1, produto);
            }
          } else {
            //devemos adcionar o objeto
            produto._id = incrementadorDeIds++;
            listaDeProdutos.push(produto);
          }
            deferred.resolve();
        } else {
            deferred.reject();
        }
        return deferred.promise;
      }

      function deletarProduto(produto) {
        var deferred = $q.defer();
        const index = listaDeProdutos.indexOf(produto);
        if (index > -1) {
          listaDeProdutos.splice(index, 1);
          deferred.resolve();
        }
        return deferred.promise;
      }
    });
