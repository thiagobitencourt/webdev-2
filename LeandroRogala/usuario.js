'use strict'

// objeto usuario
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

    this.obterUsuario = function(username){
      var usuarioRetorno;
      arrayUsuarios.forEach(function(usuario){
        if(usuario.username === username){
          usuarioRetorno = usuario;
        }
      });
      return usuarioRetorno;
    }

    this.removerUsuario = function(username){
      var usuarioIndex;
      arrayUsuarios.forEach(function(usuario, index){
        if(usuario.username === username){
          usuarioIndex = index;
        }
      });
      if(typeof usuarioIndex !== "undefined"){
        arrayUsuarios.splice(usuarioIndex, 1);
        return true;
      }else{
        return false;
      }
    }
}

//var usu = new Usuario();
//usu.autenticarUsuario("um nome de usuario");
//console.log(usu);

module.exports = Usuario;
