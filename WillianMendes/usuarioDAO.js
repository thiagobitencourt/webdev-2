'use strict'

/*const usuario = {
	username: 'willink01',
	password: '12123',
	email:'paulistinhaem@hotmail.com',
	age:20
};
*//*
var arrayUsusario=[];

function Usuario() {
  this.autenticar = function(user) {
    console.log("autenticar usuario");
    return (
      user.username === usuario.username &&
      user.password === usuario.password
    )
  }

this.criarUsuario=function(user){
	console.log("Criar usuario",user);
	arrayUsusario.push(user);

}

this.obterTodosUsuarios=function(){
	return arrayUsusario;
}

this.obterUsuario=function(username){
	console.log("obter usuario");
    var usuarioRetorno;
    arrayUsuarios.forEach(function(usuario) {
      if(usuario.username === username) {
        usuarioRetorno = usuario;
      }
    });
    return usuarioRetorno;
}}

var usu = new Usuario();

usu.autenticar("um nome de usuario");

module.exports = Usuario;
*/
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

  this.deletarUsusario=function(username){
  	arrayUsuarios.splice();
  }

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
