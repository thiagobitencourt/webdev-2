'use strict';

app = angular.module('webdev-2')
  .service('servicoUsuarios', function servico() {
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
        return usuarios;
      },
      salvarUsuario: function(usuario){
        if(!usuario.id){
          usuario.id = incrementaId++;
          usuarios.push(usuario);
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
