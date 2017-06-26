angular
.module('angularSPA')
.service('manterProdutosServico', function($q){
  var listaDeProdutos = [];
  var incrementadorDeIds = 1;

  var servico = {
    obterProdutos: obterProdutos,
    salvarProduto: salvarProduto,
    deletarProduto: deletarProduto
  }
  return servico;

  // É uma função assincrona, ou seja, retorna uma promessa
  function obterProdutos() {
    // return $http.get('/produtos'); // Também é assincrono, ou seja, retorna uma promessa
    var deferred = $q.defer();
    deferred.resolve(listaDeProdutos);
    return deferred.promise;
  }
function salvarProduto(produto) {
  //return $http.post('/produtos', produto); // retorna
  var deferred = $q.defer();

if(produto) {
    if(produto._id) {
    // devemos atualizar o objeto
var produtoOriginal = listaDeProdutos.find(function (product) {
  return product. id === produto. id;
})
var index = listaDeProdutos.indexOf (produtoOriginal);
if(index > -1) {
  listaDeProdutos.splice(index, 1, produto);
  }
  }else {
    //devemos adicionar o objeto
    produto._id = incrementadorDeIds++;
    listaDeProdutos.push(produto);
  }
    deferred.resolve();
} else {
  //não deve resolver a promessa com sucesso!
  deferred.reject();
}


  return deferred.promise;
  }

  function deletarProduto(produto) {
    var deferred = $q.defer();
    //return $http.delete('/produto/'+ produto.id);

    const index = listaDeProdutos.indexOf(produto);
    if(index > - 1) {
    listaDeProdutos.splice(index, 1);
    deferred.resolve();
    }
return deferred.promise;
}
});
