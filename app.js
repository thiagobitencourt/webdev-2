'use strict';

const Usuario = require('./usuario');
const express = require('express');

const app = express();

app.get('/', function(req, res){
  console.log("Alguém chamou /");
  res.send('retornou o /');
});

app.get('/usuario', function(req, res){
  console.log("Alguém chamou /usuario");

  const usuario = {
    username: "nome",
    password: "senha"
  }

  res.send(usuario);

});

app.listen(3000, function () {
  console.log('Exemplo app listening on port 3000!');
});


var uso = new Usuario();
console.log(uso);

var user = {
  username: 'Eleani',
  password: '123'
};

var usuarioValido = uso.autenticarUsuario(user);
if (usuarioValido){
  console.log('Login efetuado com sucesso!');
} else {
  console.log("Nome do usuário ou senha incorretos!");
}
