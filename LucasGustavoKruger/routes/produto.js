'use strict';

const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const routes = express.Router();

const getCollection = (req => {
  return req.db.get('produtos');  
});

const produto = {
  save: ((req, res) => { 
    const collection = getCollection(req);
    collection.insert({
      "_id": new ObjectID(),
      "codigo": req.body.codigo,
      "nome": req.body.nome,
      "quantidade": req.body.quantidade,
      "disponivel": req.body.disponivel
    }, (err, doc) => {
      if(err)
        res.status(500).send("Problemas no banco ao cadastrar produto.");
      res.status(200).send(doc);
    });
  }),
  delete: ((req, res) => {
    const collection = getCollection(req);
    collection.remove({
      _id: new ObjectID(req.params.id)
    }, (err, doc) => {
      res.status(200).send(doc);
    });
  }),
  update: ((req, res) => { 
    const collection = getCollection(req);
    collection.update({
      _id: new ObjectID(req.params.id)
    }, {
      $set: req.body
    }, (err, result) => {
      if(err)
        throw err;
      reply().code(204);
    });
    res.status(200).send();
  }),
  get: ((req, res) => {
    const collection = getCollection(req);
    collection.find({
      _id: new ObjectID(req.params.id)
    }, (err, doc) => {
      res.status(200).send(doc);
    });
  }),
  getAll: ((req, res) => {
    console.log('Passing here');
    const collection = getCollection(req);
    collection.find({}, (err, doc) => {
      res.status(200).send(doc);
    });
  })
};

routes.get('/produto', produto.getAll); 
routes.get('/produto/:id', produto.get);
routes.post('/produto', produto.save);
routes.put('/produto/:id', produto.update);
routes.delete('/produto/:id', produto.delete);

module.exports = routes;