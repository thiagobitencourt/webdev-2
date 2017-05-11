'use strict';

var arrayUsuarios = [];

function Usuario() {
  this.autenticarUsuario = function(user) {
    console.log("autenticar usuario");
    return (
      user.username === usuario.username &&
      user.password === usuario.password
    )
  }

  this.criarUsuario = function(user) {
    console.log("criar usuario ", user);
    arrayUsuarios.push(user);
  }

  this.obterTodosOsUsuarios = function() {
    return arrayUsuarios;
  };

  this.obterUsuario = function(username) {
    console.log("obter usuario");
    var usuarioRetorno;
    arrayUsuarios.forEach(function(usuario) {
      if(usuario.username === username) {
        usuarioRetorno = usuario;
      }
    });
    return usuarioRetorno;
  }
}

module.exports = Usuario;
