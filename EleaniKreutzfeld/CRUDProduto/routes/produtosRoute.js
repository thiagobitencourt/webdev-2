'use strict';

const express = require('express');
const router = express.Router();

// const UsuarioDAO = require('../usuarioDAO');
// const usuarioRepo = new UsuarioDAO();

const User = require('../models/produtos');

router.get('/produto', function(req, res) {
  User.find({}, function(err, todosUsuarios) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar produtos', detalhes: err.message });
    }
    res.send(todosUsuarios);
  });
});

router.get('/produto/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar produtos', detalhes: err.message });
    }
    if(user) {
      res.send(user);
    } else {
      res.status(404).send({ mensagem: 'Usuário não encontrado!' });
    }
  });
});

router.post('/produto', function(req, res) {
  const user = new User(req.body);
  user.save(function(err) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao cadastrar produtos', detalhes: err.message });
    }
    res.send(user);
  });
});

router.delete('/produto/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar produtos', detalhes: err.message });
    }
    if(user) {
      user.remove(function(err) {
        if(err) {
          return res.status(500).send({ mensagem: 'Erro ao remover produto', detalhes: err.message });
        }
        res.send({ mensagem: 'Produdo removido com sucesso!' });
      })
    } else {
      res.status(404).send({ mensagem: 'Produto não encontrado!' });
    }
  })
});

router.put('/usuario/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if(err) {
      return res.status(500).send({ mensagem: 'Error ao atualizar produto', detalhes: err.message });
    }
    res.send({ mensagem: 'Produto atualizado com sucesso!' });
  });
});

router.post('/login', function(req, res) {
  User.findOne({ username: req.body.username, password: req.body.password}, function(err, user) {
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
