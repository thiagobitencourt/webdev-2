'use strict';

app = angular.module('webdev-2')
  .service('servicoUsuarios', function servico($http) {


    var incrementaId = 1;
    var usuarios = [
      {
        id: incrementaId++,
        username: "ximbinha",
        password: "s2joelma",
        age: 18,
        email: "ximbinha@joelma"
      },
      {
        id: incrementaId++,
        username: "joelma",
        password: "s2ximbinha",
        age: 19,
        email: "joelma@ximbinha"
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
      excluirUsuario(usuario){
        var usuarioIndex = usuarios.indexOf(usuario);
        if(usuarioIndex > -1){
          usuarios.splice(usuarioIndex, 1);
        }
      }
    }
  });
