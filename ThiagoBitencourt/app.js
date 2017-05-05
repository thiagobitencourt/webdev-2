'use strict';

// const fs = require('fs'); // modulo interno do node
const express = require('express');
const Usuario = require('./usuario');

const app = express();

app.get('/', function(req, res) {
  console.log("Alguém chamou /");
  res.send("laigsfdasujcfdsaiodjhgasoijh /");
});

app.get('/usuario', function(req, res) {
  console.log("alguém chamou /usuario");
  const usuario = {
    username: "nome",
    password: "senha"
  }
  res.send(usuario);
});

app.listen(3000, function() {
  console.log("Servidor ouvindo na porta 3000");
});

// var usu = new Usuario();
// // console.log(usu);
//
// var user = {
//   username: 'thiagobitencourt',
//   password: '123321'
// };
//
// var usuarioValido = usu.autenticarUsuario(user);
// if(usuarioValido) {
//   console.log("Login efetuado com sucesso");
// } else {
//   console.log("Nome de usuário ou senha incorreto");
// }


/*
  Presença do dia 04/05

  Alexandro
  Jivago
  Fernando
  Christopher
  Matheus
  Mateus
  Leandro
  Eleani
  Willian
  Diogo
  Djovani
  Lucas 1x
*/
