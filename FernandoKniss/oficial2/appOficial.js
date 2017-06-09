'use strict';

var express  = require('express');

var app      = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({'extended':'true'}));

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var index = require('./routes/index');
app.use('/', index);

app.listen(3000);
console.log("Aplicação executada na porta 3000");
