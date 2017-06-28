angular
.module('angularSPA')
.service('manterContasServico', function($q){
  var listaDeContas = [];
  var incrementadorDeIds = 1;

  var servico = {
    obterContas: obterContas,
    salvarConta: salvarConta,
    deletarConta: deletarConta
  }
  return servico;

  // É uma função assincrona, ou seja, retorna uma promessa
  function obterContas() {
    // return $http.get('/contas'); // Também é assincrono, ou seja, retorna uma promessa
    var deferred = $q.defer();
    deferred.resolve(listaDeContas);
    return deferred.promise;
  }
function salvarConta(conta) {
  //return $http.post('/contas', conta); // retorna
  var deferred = $q.defer();

if(conta) {
    if(conta._id) {
    // devemos atualizar o objeto
var contaOriginal = listaDeContas.find(function (account) {
  return account. id === conta. id;
})
var index = listaDeContas.indexOf (contaOriginal);
if(index > -1) {
  listaDeContas.splice(index, 1, conta);
  }
  }else {
    //devemos adicionar o objeto
    conta._id = incrementadorDeIds++;
    listaDeContas.push(conta);
  }
    deferred.resolve();
} else {
  //não deve resolver a promessa com sucesso!
  deferred.reject();
}


  return deferred.promise;
  }

  function deletarConta(conta) {
    var deferred = $q.defer();
    //return $http.delete('/conta/'+ conta.id);

    const index = listaDeContas.indexOf(conta);
    if(index > - 1) {
    listaDeContas.splice(index, 1);
    deferred.resolve();
    }
return deferred.promise;
}
});
