'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const productRepo = require('./product');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const database = MongoClient.connect("mongodb://localhost:27017/product_api");

app.use(bodyParser.json());

app.get('/products', productRepo.findAll);

app.get('/products/:id', productRepo.findOne);

app.post('/products', productRepo.insert);

app.put('/products/:id', productRepo.update);

app.delete('/products/:id', productRepo.delete);
