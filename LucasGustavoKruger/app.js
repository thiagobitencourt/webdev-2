'use strict';

const dbConfig = require('./config/db');
const express = require('express'); 
const bodyParser = require('body-parser');

const routesProduct = require('./routes/produto'); 
const port = 3000;
const app = express(); 

app.use(bodyParser.json());
app.use(dbConfig.connect);
app.use('/', express.static('public'));
app.use(routesProduct);

app.listen(port, (() => console.log(`Servidor ouvindo na porta ${port}`)));
