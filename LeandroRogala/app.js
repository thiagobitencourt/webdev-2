'use strict';

const usuario = require('./04-05/usuario');
const express = require('express');

const app = express();
//var usu = new Usuario();
//console.log(usu);

app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
});

app.get('/usuario', function(req, res){
  console.log("Alugém chamou /usuario");

  const usuario = {
    username: "nome",
    password: "senha"
  };
  res.send(usuario);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

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
