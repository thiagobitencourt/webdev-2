'use strict';

// objeto usuário
const usuario = {
  username: 'Eleani',
  password: '123',
  email: 'eleani.kreutzfeld@gmail.com',
  age: 21
};


function Usuario(){
  console.log("executa a função Usuario");
  this.autenticarUsuario = function(user){
    console.log("autenticarUsuario");

    return (user.username === usuario.username && user.password === usuario.password)
  }

  this.criarUsuario = function(){
    console.log("criarUsuario");
  }

  this.obterUsuario = function(){
    console.log("obterUsuario");
  }

}

//var usu = new Usuario();
//usu.autenticarUsuario("um nome qualquer");

module.exports = Usuario;
