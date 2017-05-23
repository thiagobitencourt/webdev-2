'use strict';

const express = require('express');
const router = express.Router();

router.get('/produtos', function(req, res) { 
  res.send('Nenhum produto cadastrado');
});

router.get('/produtos/:id', function(req, res) { 
  res.send('Nenhum produto cadastrado para o ID ' + req.params.id);
});

router.post('/produtos', function(req, res) {
  res.send(req.body);
});

router.delete('/produtos/:id', function(req, res) {
  res.send('Ainda não é possível excluir um produto');
});

router.put('/produtos/:id', function(req, res) {
  res.send('Ainda não é possível atualizar os dados do produto');
});

module.exports = router;