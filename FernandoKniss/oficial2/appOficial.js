'use strict';

var express  = require('express');

var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/titular');
require('./models/titular');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var index = require('./routes/indexRoutes');
app.use('/', index);

app.listen(3000);
console.log("Aplicação executada na porta 3000");
