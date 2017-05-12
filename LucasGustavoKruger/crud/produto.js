'use strict';

const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

const getCollection = (req => {
  return req.db.get('produtos');  
});

module.exports = {
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
      _id: new ObjectID(req.body.id)
    }, (err, doc) => {
      res.status(200).send(doc);
    });
  }),
  update: ((req, res) => {
    const collection = getCollection(req);
    res.status(200).send();
  }),
  get: ((req, res) => {
    const collection = getCollection(req);
    collection.find({
      _id: req.body.id
    }, (err, doc) => {
      res.status(200).send(doc);
    });
  }),
  getAll: ((req, res) => {
    const collection = getCollection(req);
    collection.find({}, (err, doc) => {
      res.status(200).send(doc);
    });
  })
};