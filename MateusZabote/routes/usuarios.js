
const UsuarioModel = require('../models/usuario');
const ObjectId = require('mongoose').Types.ObjectId;
const Usuario = require('../models/usuario');
const usuarioRepo = new Usuario();

module.exports = {

  autenticarUsuario: ((req, res) => {
    const sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
    if (sucesso) {
      res.send('Usuario autenticado ');
    } else {
      res.status(400).send('Usuario ou senha incorretos');
    }
  }),

  criarUsuario: ((req, res) => {
    const updatedUserList = usuarioRepo.criarUsuario(req.body);
    res.send(updatedUserList);
  }),

  obterUsuarios: ((req, res) => {
    res.send(usuarioRepo.obterUsuarios());
  }),

  obterUsuario: ((req, res) => {
    const usuario = usuarioRepo.obterUsuario(req.params.username);
    if (usuario) {
      res.send(usuario);
    } else {
      res.status(404).send(`Usuario ${req.params.username} nao encontrado.`);
    }
  }),

  atualizarUsuario: ((req, res) => {
    const updatedUser = usuarioRepo.updateUsuario(req.params.username, req.body);
    if(updatedUser) {
      res.send(updatedUser);
    } else {
      res.send('Nao foi possivel alterar o usuario.');
    }
  }),

  removerUsuario: ((req, res) => {
    const hasRemovedSuccesfully = usuarioRepo.removerUsuario(req.params.username);
    if(hasRemovedSuccesfully) {
      res.send('Usuario removido com sucesso!');
    } else {
      res.send(`usuario não removido ${req.params.username}`);
    }
  })
};
