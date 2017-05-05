'use strict';

const express = require('express');

let app = express();

app.get('/', (req, res) => {
  console.log('Alguém chamou...');
  res.send("Eu acessei a url no caminho /");
});

app.get('/usuario', (req, res) => {
  const usuario = {
    username: "nome",
    senha: "0932184901"
  };
  console.log("Alguém chamou um usuário.");
  res.send(usuario);
});

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000.');
})