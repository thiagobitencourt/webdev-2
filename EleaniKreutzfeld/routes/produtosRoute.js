'use strict';

const express = require('express');
const router = express.Router();

const Produto = require('../models/produtos');

router.get('/produtos', function(req, res) {
  Produto.find({}, function(err, todosProdutos) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar produtos', detalhes: err.message });
    }
    res.send(todosProdutos);
  });
});

router.get('/produtos/:id', function(req, res) {
  Produto.findById(req.params.id, function(err, produto) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar produto', detalhes: err.message });
    }
    if(produto) {
      res.send(produto);
    } else {
      res.status(404).send({ mensagem: 'Produto não encontrado!' });
    }
  });
});

router.post('/produtos', function(req, res) {
  const produto = new Produto(req.body);
  produto.save(function(err) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao cadastrar produto', detalhes: err.message });
    }
    res.send(produto);
  });
});

router.delete('/produtos/:id', function(req, res) {
  Produto.findById(req.params.id, function(err, produto) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar produto', detalhes: err.message });
    }
    if(produto) {
      produto.remove(function(err) {
        if(err) {
          return res.status(500).send({ mensagem: 'Erro ao remover produto', detalhes: err.message });
        }
        res.send({ mensagem: 'Produto removido com sucesso!' });
      })
    } else {
      res.status(404).send({ mensagem: 'Produto não encontrado!' });
    }
  })
});

router.put('/produtos/:id', function(req, res) {
  Produto.findByIdAndUpdate(req.params.id, req.body, function(err, produto) {
    if(err) {
      return res.status(500).send({ mensagem: 'Error ao atualizar produto', detalhes: err.message });
    }
    res.send({ mensagem: 'Produto atualizado com sucesso!' });
  });
});

router.post('/login', function(req, res) {
  User.findOne({ nome: req.body.nome, codigo: req.body.codigo}, function(err, user) {
    if(err) {
      return res.status(500).send({ mensagem: 'Error ao autenticar usuário', detalhes: err.message });
    }
    if(user) {
      res.send({ mensagem: 'Usuário autenticado com sucesso!' });
    } else {
      res.status(400).send({ mensagem: 'Nome de usuário ou senha incorretos' });
    }
  });
});

module.exports = router;
