'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const rotaContas = require('./routes/contasRoute');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudConta');


app.use(bodyParser.json());

app.use('/', express.static('public'));

app.use(rotaContas());

app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
});
