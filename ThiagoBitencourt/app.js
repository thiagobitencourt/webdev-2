'use strict';
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  console.log("Alguém chamou /");
  res.send("vc acessou /");
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
