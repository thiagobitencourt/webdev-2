'use strict';


const express = require('express');
const Usuario = require('./usuario');

const app = express();

app.get('/', function(req, res){
  console.log("alguem chamou /")
  res.send("alguem chamou /")
});

app.listen(3000, function (){
    console.log('Servidor ouvindo na porta 3000')
});

app.get('/usuario', function(req, res) {
  console.log("alguem chamou /usuario");

  const usuario = {
    username: "nome",
    passsword: "senha"
  }
  res.send(usuario);
});

var usu = new Usuario();
//console.log(usu);

var user = {
    username: 'djiovani',
    password: '123456'
};

var usuarioValido = usu.autenticarUsuario(user);
if(usuarioValido) {
  console.log("Login efetuado com sucesso");
} else {
  console.log("Nome de Usuário ou senha incorreto");
}