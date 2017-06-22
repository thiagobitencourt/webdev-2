angular
  .module('angularSPA')
  .service('manterUsuariosServico', function($q){
    var listaDeUsuarios = [];

    var servico = {
      obterUsuarios: obterUsuarios,
      salvarUsuario: salvarUsuario
    }
    return servico;

    // É uma função assincrona, ou seja, retorna uma promessa
    function obterUsuarios() {
      // return $http.get('/usuarios'); // Também é assincrono, ou seja, retorna uma promessa
      var deferred = $q.defer();
      deferred.resolve(listaDeUsuarios);
      return deferred.promise;
    }

    function salvarUsuario(usuario) {
      // return $http.post('/usuarios', usuario);// retorna uma promessa
      var deferred = $q.defer();
      listaDeUsuarios.push(usuario);
      deferred.resolve();
      return deferred.promise;
    }

  });
