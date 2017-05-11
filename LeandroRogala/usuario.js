'use strict'

// objeto usuario
const usuario = {
  username: 'xblade70',
  password: '33778833',
  nome: 'Leandro',
  sobrenome: 'Rogala',
  idade: 21,
  email: 'leandrorogala17@hotmail.com'
};

var arrayUsuarios = [];

function Usuario(){

    var funcaoPrivada = function(){
      console.log("Aqui é privado");
    }

    this.id = 1;

    this.autenticarUsuario = function(user){
      //funcaoPrivada();
      // if(user.username === usuario.username && user.password === usuario.password){
      //   return true;
      // }else{
      //   return false;
      // }
      return (user.username === usuario.username && user.password === usuario.password);
    }

    this.criarUsuario = function(user){
      arrayUsuarios.push(user);
    }

    this.obterTodosOsUsuarios = function(){
      return arrayUsuarios;
    }

    this.obterUsuario = function(){
      return usuario;
    }
}

//var usu = new Usuario();
//usu.autenticarUsuario("um nome de usuario");
//console.log(usu);

module.exports = Usuario;
