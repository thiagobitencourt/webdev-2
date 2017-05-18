'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();

const dbUser = 'matheus';
const dbPassword = 'baguvix';
const dbUrl = `mongodb://${dbUser}:${dbPassword}@ds159880.mlab.com:59880/product-api`;

MongoClient.connect(dbUrl, (err, db) => {
  
  if(err) {
    console.error(err);
    process.exit(1);
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
    
    const newProduct = {
      _id: new ObjectID(),
      nome: req.body.nome,
      codigo: req.body.codigo,
      quantidade: req.body.quantidade,
      disponivel: req.body.disponivel
    };

    products.save(newProduct, (err, result) => {
      if(err) {
        throw err;
      }
      console.log(`${req.body.nome} saved successfully!`);
      res.send(result);
    });
  });

  app.get('/products/:id', (req, res) => {
    products.findOne({ _id: new ObjectID(req.params.id) }, (err, item) => {
      if(!item) {
        res.status(404).send('Produto não encontrado.');
      } else {
        res.send(item);
      }
    });
  });

  app.put('/products/:id', (req, res) => {
    
    products.updateOne({ _id: new ObjectID(req.params.id) }, req.body, (err, result) => {
      if (err) {
        throw err;
      }
      console.log(`Product ${req.params.id} updated successfully!`)
      res.send(result);
    });
  });

  app.delete('/products/:id', (req, res) => {
    products.deleteOne({ _id: new ObjectID(req.params.id) }, (result) => {
      console.log(result);
      res.send(`${req.params.id} removed successfully!`);
    });
  });

  app.listen(8080, () => console.log('Listening on port 8080'));
});