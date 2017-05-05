'use strict';
// Objeto usuario

var usuario = {
  username: 'djiovani',
  password: '123456',
  email: 'djiovani.douglas@gmail.com',
  age: 24
};

function Usuario(){
  console.log("executa a função usuario");
  var funcaoPrivada = function() {
    console.log ("aqui e privado");
  }

  this.id = 1;
  this.autenticarUsuario = function(user) {
    //funcaoPrivada();
     console.log("autenticar usuario");
//     if(user.username === usuario.username
//     && user.password === usuario.password) {
//     return true;
//   } else {
//     return false;
//   }
   return (
     user.username === usuario.username &&
     user.password === usuario.password
   )
  }

  this.criarUsuario = function(user) {
    console.log("criar usuario");
  }

  this.objetoUsuario = function() {
    console.log("obter usuario");
  }
}

//var usu = new Usuario ();
//console.log(usu);
//usu.autenticarUsuario("um nome de usuario");


module.exports = Usuario;
