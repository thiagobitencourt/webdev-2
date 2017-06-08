'use strict';

const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const app = express(); 

mongoose.connect('mongodb://127.0.0.1:27017/oficial2');

app.use(bodyParser.json());
app.use('/', express.static('public'));

app.listen(port, (() => console.log(`Servidor ouvindo na porta ${port}`)));