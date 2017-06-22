angular.module('angularSPA').service('manterUsuariosServico', function($q, $http){
  var listaDeUsuarios = [
    {
      username: 'qualquer',
      password: 'qualquer',
      age: 22,
      email: 'aawwd'
    }
  ];

  var servico = {
    obterUsuarios: obterUsuarios,
    salvarUsuario: salvarUsuario
  }

  return servico;

  function obterUsuarios(){
    // return $http.get('/usuarios');
    // return listaDeUsuarios;

    var deferred = $q.defer();
    deferred.resolve(listaDeUsuarios);
    return deferred.promise;
  }

  function salvarUsuario(usuario) {
    // $http.post('/usuarios', usuario);
    var deferred = $q.defer();
    listaDeUsuarios.push(usuario);
    deferred.resolve();
    return deferred.promise;
  }

});
