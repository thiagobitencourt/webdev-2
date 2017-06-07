'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/*
Se a base de dados não estiver em localhost use
  set DB_URL="IP ou HOST que esta o banco de dados"
para configurar o ip ou a url do banco de dados.
*/
const dburl = process.env.DB_URL && process.env.DB_URL.trim() || 'localhost';
mongoose.connect('mongodb://' + dburl + ':27017/webdev2', function(error) {
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
