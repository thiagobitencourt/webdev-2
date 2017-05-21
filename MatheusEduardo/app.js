'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const usuarioRepo = require('./routes/usuarios.js');

app.use(bodyParser.json());

app.use('/', express.static('public'));

app.post('/login', usuarioRepo.autenticarUsuario);
app.get('/usuarios', usuarioRepo.obterUsuarios);
app.get('/usuarios/:username', usuarioRepo.obterUsuario);
app.post('/usuarios', usuarioRepo.criarUsuario);
app.put('/usuarios/:username', usuarioRepo.atualizarUsuario);
app.delete('/usuarios/:username', usuarioRepo.removerUsuario);

app.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000.');
});