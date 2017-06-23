angular.module('angularSPA').service('manterUsuariosServico', function($q, $http){

  var listaDeUsuarios = [
    {
      username: 'qualquer',
      password: 'qualquer',
      age: 22,
      email: 'aawwd'
    }
  ];

  var incrementadorDeIds = 1;

  var servico = {
    obterUsuarios: obterUsuarios,
    salvarUsuario: salvarUsuario,
    deletarUsuario: deletarUsuario
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
    if(usuario){
      if(usuario._id){
        var usuarioOriginal = listaDeUsuarios.find(function(user){
          return usuario._id === user._id;
        });
        const index = listaDeUsuarios.indexOf(usuarioOriginal);
        if(index > -1){
          listaDeUsuarios.splice(index, 1, usuario);
        }
      }else{
        usuario._id = incrementadorDeIds++;
        listaDeUsuarios.push(usuario);
      }
      deferred.resolve();
    }else{
      deferred.reject();
    }

    return deferred.promise;
  }

  function deletarUsuario(usuario){
    const index = listaDeUsuarios.indexOf(usuario);
    if(index > -1){
      listaDeUsuarios.splice(index, 1);
    }
    var deferred = $q.defer();
    deferred.resolve(listaDeUsuarios);
    return deferred.promise;
  }

});
