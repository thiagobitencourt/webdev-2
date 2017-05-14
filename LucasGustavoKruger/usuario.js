'use strict';
// objeto usuario
const usuario = {
  username: 'LucasKr',
  password: 'lucas123',
  email: 'lucas.kr1996@gmail.com',
  age: 20
};

function Usuario() { 

  var funcaoPrivada = function() {
    console.log("aqui é privado");
  } 

  this.id = 1;

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
  }
}

module.exports = Usuario;