angular
  .module('angularSPA')
  .service('manterUsuariosServico', function($q){
    var listaDeUsuarios = [
      {
        username: 'mateus',
        password: '123',
        age: 25,
        email: 'mateus@mm'

      }
    ];

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

    function salvarUsuario(usuario){
      var deferred = $q.defer();
        listaDeUsuarios.push(usuario);
        deferred.resolve();
        return deferred.promise;
    }

  });
