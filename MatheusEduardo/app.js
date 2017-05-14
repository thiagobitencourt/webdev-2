'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const productRepo = require('./product');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();

const dbUser = 'matheus';
const dbPassword = 'baguvix';
const dbUrl = `mongodb://${dbUser}:${dbPassword}@ds159880.mlab.com:59880/product-api`;

MongoClient.connect(dbUrl, (err, db) => {
  if(err) {
    throw err;
  }
  const products = db.collection('products');
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send('This is the Product API.');
  });

  app.get('/products', (req, res) => {
    products.find().toArray((err, results) => {
      res.send(results);
    });
  });

  app.post('/products', (req, res) => {
    
    const newProduct = Object.assign({}, req.body, {
      _id: new ObjectID()
    });

    products.save(newProduct, (err, result) => {
      if(err) {
        throw err;
      }
      console.log(`${req.body.nome} saved successfully!`);
      res.redirect('/');
    });
  });

  app.get('/products/:id', (req, res) => {
    products.findOne({ _id: req.params.id }, (err, item) => {
      res.send(item);
    });
  });

  app.put('/products/:id', (req, res) => {
    
    products.updateOne({ _id: req.body._id }, req.body, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(`Product ${updatedProduct._id} updated successfully!`)
      res.send(result);
    });
  });

  app.delete('/products/:id', (req, res) => {
    products.deleteOne({ _id: req.params.id }).then((result) => {
      console.log(result);
    });
  });

  app.listen(8080, () => console.log('Listening on port 8080'));
});