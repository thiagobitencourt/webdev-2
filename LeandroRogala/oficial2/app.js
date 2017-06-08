'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const rotaConta = require("./routes/contaRoute");

app.use(bodyParser.json());

app.use('/', express.static('public'));

app.use(rotaConta);

app.listen(3000, function(){
  console.log("Example app listening on port 3000!");
});
