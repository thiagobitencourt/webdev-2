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
    this.autenticarUsuario = function(user){
      console.log("autentica");
    }

    this.crearUsuario = function(user){
      console.log("crear");
    }

    this.obterUsuario = function(){
      console.log("obter ");
    }
}

var usu = new Usuario();
usu.autenticarUsuario("um nome de usuario");
