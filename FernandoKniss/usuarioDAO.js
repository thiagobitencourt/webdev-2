'use strict';

var arrayUsuario = [];

function Usuario() {
  this.autenticarUsuario = function(username, password) {
    var usu = arrayUsuario.find(function(usuario) {
      return usuario.username === username
    });
    if (usu) {
      return usu.password === password;
    } else {
      return false;
    }
  }

  this.criarUsuario = function(user) {
    arrayUsuario.push(user);
  }

  this.obterTodosOsUsuarios = function() {
    return arrayUsuario;
  };

  this.obterUsuario = function(username) {
    console.log("obter usuario");
    var usuarioRetorno;
    arrayUsuario.forEach(function(usuario) {
      if (usuario.username === username) {
        usuarioRetorno = usuario;
      }
    });
    return usuarioRetorno;
  }

this.removerUsuario = function(username) {
  var usuarioIndex;
  arrayUsuario.forEach(function(usuario, index) {
    if (usuario.username === username) {
      usuarioIndex = index;
    }
  });
    if (typeof usuarioIndex !== 'undefined') {
    arrayUsuario.splice(usuarioIndex, 1);
    return true;
    } else {
    return false;
    }
  }

    this.alterarUsuario = function(username, newUser) {
        var alterou = false;
        arrayUsuario.forEach(function (usuario) {
          if (usuario.username === username) {
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
// var usu = new Usuario();
// console.log(usu);
// usu.autenticarUsuario("um nome de usuario");

module.exports = Usuario;
