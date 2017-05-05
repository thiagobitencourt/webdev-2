'use strict';

//const fs = require('fs'); // modulo interno do node

const express = require('express');
const Usuario = require('./usuario');

const app = express();

app.get('/', function (req, res) {
  console.log("Alguem chamou /")
  res.send('Hello World!');
});

app.get('/usuario', function(req, res) {
  console.log("alguem chamou /usuario");

  const usuario = {
    username: "nome",
    password: "senha"
  }
  res.send(usuario);
});

app.listen(3000, function () {
  console.log('servidor ouvindo a porta 3000!');
});


//  var usu = new Usuario();
//  console.log(usu);
//
// var user = {
//   username: 'fernandokniss',
//   password: '123123'
// };
//
// var usuarioValido = usu.autenticarUsuario(user);
// if (usuarioValido) {
//   console.log("Login efetuado com sucesso");
// } else {
//   console.log("Nome de usuario ou senha incorreto");
// }
