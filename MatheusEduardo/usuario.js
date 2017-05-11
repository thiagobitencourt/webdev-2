'use strict';

const usuario = {
  username: "matheuseduardo",
  password: "123456",
  email: "matheus.eduardo7890@gmail.com",
  age: 20
};

function Usuario() {
  
  this.autenticar = function(user) {
    console.log(user);
  }

}

let usu = new Usuario();
usu.autenticar(usuario);