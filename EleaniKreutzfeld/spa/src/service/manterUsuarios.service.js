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

    function obterUsuarios() {
      var deferred = $q.defer();
      deferred.resolve(listaDeUsuarios);
      return deferred.promise;
    }

    function salvarUsuario(usuario) {
      var deferred = $q.defer();
      if (usuario) {
      if (usuario._id) {
        var usuarioOriginal = listaDeUsuarios.find(function (user) {
          return user._id === usuario._id;
        })
        var index = listaDeUsuarios.indexOf(usuarioOriginal);
        if (index > -1) {
          listaDeUsuarios.splice(index, 1, usuario);
        }

      } else {
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
      var deferred = $q.defer();
      const index = listaDeUsuarios.indexOf(usuario);
      if (index > -1) {
        listaDeUsuarios.splice(index, 1);
        deferred.resolve();
      }
        return deferred.promise;
    }

  });
