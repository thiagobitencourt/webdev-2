'use strict';

app = angular.module('webdev-2')
  .service('servicoUsuarios', function($http) {
    var incrementaId = 1;
    var usuarios = [
      {
        id: incrementaId++,
        username: "chiquinha",
        password: "chavesquerido",
        age: 7,
        email: "chiquinha@vila.com"
      },
      {
        id: incrementaId++,
        username: "jaime",
        password: "jaime123",
        age: 18,
        email: "jai@me.com"
      },
      {
        id: incrementaId++,
        username: "tibursio",
        password: "12345",
        age: 89,
        email: "tibursio@quase.com"
      }
    ];

    return {
      obterUsuarios: function() {
        return $http.get('http://localhost:3000/usuario');
      },
      salvarUsuario: function(usuario) {
        if(!usuario._id) {
          return $http.post('http://localhost:3000/usuario', usuario);
        //   usuario.id = incrementaId++; // Não vai mais existir
        //   usuarios.push(usuario);// Não vai mais existir
        } else {
          return $http.put('http://localhost:3000/usuario/' + usuario._id, usuario)
            /* Não vai mais existir
          var usuarioAtualizar = usuarios.find(function(user) {
            return user.id === usuario.id;
          });
          var usuarioIndex = usuarios.indexOf(usuarioAtualizar);
          if(usuarioIndex > -1) {
            usuarios.splice(usuarioIndex, 1, usuario);
          } */
        }
      },
      excluirUsuario: function(usuario) {
        return $http.delete('http://localhost:3000/usuario/' + usuario._id);
        // var usuarioIndex = usuarios.indexOf(usuario);
        // if(usuarioIndex > -1) {
        //   usuarios.splice(usuarioIndex, 1);
        // }
      }
    }
  });
