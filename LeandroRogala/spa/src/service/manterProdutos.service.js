angular.module('angularSPA').service('manterProdutosServico', function($q, $http){

  var listaDeProdutos = [
  ];

  var incrementadorDeIds = 1;

  var servico = {
    obterProdutos: obterProdutos,
    salvarProduto: salvarProduto,
    deletarProduto: deletarProduto
  }

  return servico;

  function obterProdutos(){
    // return $http.get('/usuarios');
    // return listaDeUsuarios;

    var deferred = $q.defer();
    deferred.resolve(listaDeProdutos);
    return deferred.promise;
  }

  function salvarProduto(produto) {
    // $http.post('/usuarios', usuario);
    var deferred = $q.defer();
    if(produto){
      if(produto._id){
        var produtoOriginal = listaDeProdutos.find(function(product){
          return produto._id === product._id;
        });
        const index = listaDeProdutos.indexOf(produtoOriginal);
        if(index > -1){
          if(produto.quantidade){
            produto.disponivel = true;
          }else{
            produto.disponivel = false;
          }
          listaDeProdutos.splice(index, 1, produto);
        }
      }else{
        produto._id = incrementadorDeIds++;
        if(produto.quantidade){
          produto.disponivel = true;
        }else{
          produto.disponivel = false;
        }
        listaDeProdutos.push(produto);
      }
      deferred.resolve();
    }else{
      deferred.reject();
    }

    return deferred.promise;
  }

  function deletarProduto(produto){
    const index = listaDeProdutos.indexOf(produto);
    if(index > -1){
      listaDeProdutos.splice(index, 1);
    }
    var deferred = $q.defer();
    deferred.resolve(listaDeProdutos);
    return deferred.promise;
  }

});
