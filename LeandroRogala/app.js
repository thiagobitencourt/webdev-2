'use strict';

const usuario = require('./04-05/usuario');

//var usu = new Usuario();
//console.log(usu);

var usu = new usuario();
console.log(usu);

var user = {
  username: 'xblade70',
  password: '33778833'
}

var usuarioValido = usu.autenticarUsuario(user);
if(usuarioValido){
  console.log("Login efetuado com sucesso");
}else{
  console.log("Nome de usuário ou senha incorretos");
}
