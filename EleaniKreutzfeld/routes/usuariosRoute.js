'use strict';

const express = require('express');
const router = express.Router();

// const UsuarioDAO = require('../usuarioDAO');
// const usuarioRepo = new UsuarioDAO();

const User = require('../models/usuarios');

router.get('/usuario', function(req, res) {
  User.find({}, function(err, todosUsuarios) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar usuários', detalhes: err.message });
    }
    res.send(todosUsuarios);
  });
  // const todosUsuarios = usuarioRepo.obterTodosOsUsuarios();
  // if(todosUsuarios.length) {
  //   return res.send(todosUsuarios);
  // }
  // res.send("Nenhum usuário cadastrado!");
});

router.get('/usuario/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar usuários', detalhes: err.message });
    }
    if(user) {
      res.send(user);
    } else {
      res.status(404).send({ mensagem: 'Usuário não encontrado!' });
    }
  });
  /*
  var usuario = usuarioRepo.obterUsuario(req.params.username);
  if(usuario) {
    res.send(usuario);
  } else {
    res.status(404).send("Não encontramos o usuário " + req.params.username);
  }
  */
});

router.post('/usuario', function(req, res) {
  const user = new User(req.body);
  user.save(function(err) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao cadastrar usuários', detalhes: err.message });
    }
    res.send(user);
  });
  // usuarioRepo.criarUsuario(req.body);
  // res.send(req.body);
});

router.delete('/usuario/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) {
      return res.status(500).send({ mensagem: 'Erro ao buscar usuários', detalhes: err.message });
    }
    if(user) {
      user.remove(function(err) {
        if(err) {
          return res.status(500).send({ mensagem: 'Erro ao remover usuário', detalhes: err.message });
        }
        res.send({ mensagem: 'Usuário removido com sucesso!' });
      })
    } else {
      res.status(404).send({ mensagem: 'Usuário não encontrado!' });
    }
  })
  /*
  var sucesso = usuarioRepo.removerUsuario(req.params.username);
  if(sucesso) {
    res.send("Usuário removido com sucesso!");
  } else {
    res.send("Usuário não foi encontrado");
  }
  */
});

router.put('/usuario/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if(err) {
      return res.status(500).send({ mensagem: 'Error ao atualizar usuário', detalhes: err.message });
    }
    res.send({ mensagem: 'Usuário atualizado com sucesso!' });
  });
  /*
  var alterou = usuarioRepo.alterarUsuario(req.params.username, req.body);
  if(alterou) {
    res.send("Usuário alterado com sucesso!");
  } else {
    res.send("Usuário não foi encontrado");
  }
  */
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
  /*
  var sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
  if(sucesso) {
    res.send("Usuário autenticado com sucesso!");
  } else {
    res.status(400).send("Nome de usuário ou senha estão incorretos");
  }
  */
});

module.exports = router;
