'use strict';
// objeto usuario
const usuario = {
  username: 'thiagobitencourt',
  password: '123321',
  email: 'thiago@bitencourt.com.br',
  age: 25
};

function Usuario() {
  console.log("executa a função usuário");

  var funcaoPrivada = function() {
    console.log("aqui é privado");
  }

  /*
    var valor1 = 20;
    var valor2 = "20";

    valor1 == valor2; // true
    valor1 === valor2; // false
  */

  this.id = 1;
  this.autenticarUsuario = function(user) {
    // funcaoPrivada();
    console.log("autenticar usuario");
    // if(user.username === usuario.username && user.password === usuario.password) {
    //   return true;
    // } else {
    //   return false;
    // }
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
// var usu = new Usuario();
// console.log(usu);
// usu.autenticarUsuario("um nome de usuario");

module.exports = Usuario;
