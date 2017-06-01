'use strict';
var arrayUsuarios = [];

function Usuario() {
  this.autenticarUsuario = function(username, password) {
    var usu = arrayUsuarios.find(function(usuario) {
      return usuario.username === username
    });

    if(usu) {
      return usu.password === password;
    } else {
      return false;
    }
  }

  this.criarUsuario = function(user) {
    arrayUsuarios.push(user);
  }

  this.obterTodosOsUsuarios = function() {
    return arrayUsuarios;
  };

  this.obterUsuario = function(username) {
    var usuarioRetorno;
    arrayUsuarios.forEach(function(usuario) {
      if(usuario.username === username) {
        usuarioRetorno = usuario;
      }
    });
    return usuarioRetorno;
  }

  this.removerUsuario = function(username) {
    var usuarioIndex;
    arrayUsuarios.forEach(function(usuario, index) {
      if(usuario.username === username) {
        usuarioIndex = index;
      }
    });
    if(typeof usuarioIndex !== 'undefined') {
      arrayUsuarios.splice(usuarioIndex, 1);
      return true;
    } else {
      return false;
    }
  }

  this.alterarUsuario = function(username, newUser) {
    // achar o usuario, alterar o usuario
    var alterou = false;
    arrayUsuarios.forEach(function(usuario) {
      if(usuario.username === username) {
        usuario.username = newUser.username;
        usuario.password = newUser.password;
        usuario.email = newUser.email;
        usuario.age = newUser.age;
        alterou = true;
      }
    });
    return alterou;
  }
}

module.exports = Usuario;
