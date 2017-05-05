'use strict';
//objeto usuario
const usuario = {
username: 'MateusZabote',
password: '123456',
email: 'mateus.zabotedasilva@gmail.com',
age:24

};
/*
ou

var usuario = {
username: 'MateusZabote',
password: '123456',
email: 'mateus.zabotedasilva@gmail.com',
age:24

};*/

function Usuario(){
  console.log("executa a função usuario");

var funcaoPrivada = function(){
  console.log("aqui é privada");
}

  this.id = 1;
  this.autenticarUsuario = function(user){
    funcaoPrivada();
    console.log("executar usuario");

// if(user.username === usuario.username &&
//   user.password === usuario.password){
//     return true;
//   }else {
//     return false;
//   }
return (
  user.username === usuario.username &&
  user.password === usuario.password
  )
}
  this.criarUsuario = function(user){
    console.log("criar usuario");
  }
  this.obterUsuario = function(){
    console.log("obter usuario");
  }
}

//var usu = new Usuario();
//console.log(usu);
//usu.autenticarUsuario("um nome de usuario");

module.exports = Usuario;
