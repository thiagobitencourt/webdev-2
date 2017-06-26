angular
  .module('angularSPA')
  .service('manterUsuariosServico', function($q){
    var listaDeUsuarios = [];

    var incrementadorDeIds = 1;

    var servico = {
      obterUsuarios: obterUsuarios,
      salvarUsuario: salvarUsuario,
      deletarUsuario: deletarUsuario
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
      if (usuario) {
      if (usuario._id) {
        // devemos atualizar o objeto
        var usuarioOriginal = listaDeUsuarios.find(function (user) {
          return user._id === usuario._id;
        })
        var index = listaDeUsuarios.indexOf(usuarioOriginal);
        if (index > -1) {
          listaDeUsuarios.splice(index, 1, usuario);
        }

      } else {
        // devemos adicionar o objeto
      usuario._id = incrementadorDeIds++;
      listaDeUsuarios.push(usuario);
      }

      deferred.resolve();

    } else {

      deferred.reject();

    }

      return deferred.promise;
    }

    function deletarUsuario(usuario) {
      // return $http.delete('/usuarios', usuario);// retorna uma promessa
      var deferred = $q.defer();
      const index = listaDeUsuarios.indexOf(usuario);
      if (index > -1) {
        listaDeUsuarios.splice(index, 1);
        deferred.resolve();
      }
        return deferred.promise;
    }

  });
