'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const rotaProdutos = require('./routes/produtoRoute');

app.use(bodyParser.json());

app.use('/', express.static('public'));

app.use(rotaProdutos);

app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
});
