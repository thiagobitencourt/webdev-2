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

function Usuario(){

    var funcaoPrivada = function(){
      console.log("Aqui é privado");
    }

    this.id = 1;

    this.autenticarUsuario = function(user){
      //funcaoPrivada();
      console.log("autentica");

      // if(user.username === usuario.username && user.password === usuario.password){
      //   return true;
      // }else{
      //   return false;
      // }

      return (user.username === usuario.username && user.password === usuario.password);
    }

    this.crearUsuario = function(user){
      console.log("crear");
    }

    this.obterUsuario = function(){
      console.log("obter ");
    }
}

//var usu = new Usuario();
//usu.autenticarUsuario("um nome de usuario");
//console.log(usu);

module.exports = Usuario;
