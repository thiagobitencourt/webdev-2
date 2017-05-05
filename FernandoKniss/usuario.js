'use strict';

//objeto usuario
const usuario = {
  username: 'fernandokniss',
  password: '123123',
  email: 'fernandofkniss@gmail.com',
  age: 20
};

function Usuario() {
  console.log("executa a função usuário");

  var funcaoPrivada = function() {
    console.log("aqui é privado.");
  }
  this.id = 1;
  this.autenticarUsuario = function(user) {
    // funcaoPrivada();
  console.log("autenticar usuario");

  // if (user.username === usuario.username &&
  //     user.password === usuario.password)
  //   {
  //   return true;
  //   } else {
  //   return false;
  //   }

  return (
      user.username === usuario.username &&
      user.password === usuario.password
    )
  }

  this.crearUsuario = function(user) {
    console.log("criar usuario")
  }

  this.obterUsuario = function() {
    console.log("obter usuario");
  }
}

// var usu = new Usuario();
// console.log(usu);
// usu.autenticarUsuario("um nome de usuario");

module.exports = Usuario;
