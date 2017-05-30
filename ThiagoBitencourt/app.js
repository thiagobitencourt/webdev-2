'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.56.101:27017/webdev2', function(error) {
  /*
    Se houver algum erro na conexão com o banco
    lança uma exceção e finaliza a execução da aplicação
  */
  if(error) throw new Error(error);

  const app = express();

  const rotaUsuarios = require('./routes/usuariosRoute');
  const rotaProdutos = require('./routes/produtosRoute');

  console.log("Connectado ao banco com sucesso!");
  // parser para json
  app.use(bodyParser.json());

  app.use('/', express.static('public'));
  app.use(rotaUsuarios);
  app.use(rotaProdutos);

  app.listen(3000, function() {
    console.log("Servidor ouvindo na porta 3000");
  });
});
