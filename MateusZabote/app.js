'use strict';

// const fs = require('fs'); // modulo interno do node


const express = require('express');
const Usuario = require('./usuario');

const app = express();

app.get('/usuario', function(req, res){
  console.log("alguem chamou /usuario");

const usuario = {
  username: "nome",
  password: "senha"
}
res.send(usuario);
});



app.listen(3000, function () {
  console.log("servidor ouvindo na porta 3000");
});


var usu = new Usuario();
console.log(usu);

var user ={
  username: "MateusZabote",
  password: '123456'
};
var usuarioValido = usu.autenticarUsuario(user);
if(usuarioValido){
  console.log("login efetuado com sucesso");
} else {
  console.log("Nome de usuario ou senha incorreto");
}
