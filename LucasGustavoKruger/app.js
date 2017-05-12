'use strict';

const dbConfig = require('./db');
const express = require('express');
const bodyParser = require('body-parser');

const produto = require('./crud/produto'); 
const port = 3000;
const app = express(); 

app.use(bodyParser.json());
app.use(dbConfig.connect);
app.get('/', ((req, res) => res.status(200).send("Hello World")));
app.get('/produtos', produto.getAll); 
app.get('/produto/:id', produto.get);
app.post('/produto', produto.save);
app.put('/produto/:id', produto.update);
app.delete('/produto/:id', produto.delete);

app.listen(port, (() => console.log(`Servidor ouvindo na porta ${port}`)));
