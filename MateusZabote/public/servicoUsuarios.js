'use strict';

app = angular.module('webdev-2')
  .service('servicoUsuarios', function() {
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
        console.log("Vai retornar os usuários");
        return usuarios;
      },
      salvarUsuario: function(usuario) {
        if(!usuario.id) {
          usuario.id = incrementaId++;
          usuarios.push(usuario);
        } else {
          var usuarioAtualizar = usuarios.find(function(user) {
            return user.id === usuario.id;
          });
          var usuarioIndex = usuarios.indexOf(usuarioAtualizar);
          if(usuarioIndex > -1) {
            usuarios.splice(usuarioIndex, 1, usuario);
          }
        }
      },
      excluirUsuario: function(usuario) {
        var usuarioIndex = usuarios.indexOf(usuario);
        if(usuarioIndex > -1) {
          usuarios.splice(usuarioIndex, 1);
        }
      }
    }
  });
