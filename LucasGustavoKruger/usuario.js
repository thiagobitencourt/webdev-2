'use strict';

const usuario = {
  username: 'Lucas Kruger',
  password: 'lucas123',
  email: 'lucas.kr1996@gmail.com',
  age: 20
};

function Usuario() {
  
  this.autenticar = function(user) {
    console.log(user);
  }

}

let usu = new Usuario();
usu.autenticar(usuario);
