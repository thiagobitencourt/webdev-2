'use strict';
// objeto usuario
const usuario = {
  username: 'thiagobitencourt',
  password: 'minhasenhasegura',
  email: 'thiago@bitencourt.com.br',
  age: 25
};

function Usuario() {
  this.autenticarUsuario = function(user) {
    console.log("autenticar usuario");
    return (
      user.username === usuario.username &&
      user.password === usuario.password
    )
  }

  this.criarUsuario = function(user) {
    console.log("criar usuario");
  }

  this.obterUsuario = function() {
    console.log("obter usuario");
    return usuario;
  }
}

module.exports = Usuario;
