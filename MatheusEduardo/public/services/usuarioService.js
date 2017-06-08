'use strict';

app = angular.module('webdev-2')
.service('usuarioService', function($http) {
  return {
    obterUsuarios: function() {
      return $http.get('http://localhost:3000/usuario');
    },
    
    salvarUsuario: function(usuario) {
      if (!usuario._id) {
        return $http.post('http://localhost:3000/usuario', usuario);
      } else {
        return $http.put(`http://localhost:3000/usuario/${usuario._id}`, usuario);
      }
    },

    removerUsuario: function(usuario) {
      return $http.delete(`http://localhost:3000/usuario/${usuario._id}`);
    }
  }
});