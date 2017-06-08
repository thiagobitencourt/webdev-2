const UsuarioModel = require('../models/usuario');
const ObjectId = require('mongoose').Types.ObjectId;

const Usuario = require('../models/usuario');
const usuarioRepo = new Usuario();

module.exports = {

  autenticarUsuario: ((req, res) => {
    const sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
    if (sucesso) {
      res.send('Usu�rio autenticado com sucesso!');
    } else {
      res.status(400).send('Nome de usu�rio ou senha est�o incorretos');
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
      res.status(404).send(`Usu�rio ${req.params.username} n�o encontrado.`);
    }
  }),

  atualizarUsuario: ((req, res) => {
    const updatedUser = usuarioRepo.updateUsuario(req.params.username, req.body);
    if(updatedUser) {
      res.send(updatedUser);
    } else {
      res.send('N�o foi poss�vel alterar o usu�rio.');
    }
  }),

  removerUsuario: ((req, res) => {
    const hasRemovedSuccesfully = usuarioRepo.removerUsuario(req.params.username);
    if(hasRemovedSuccesfully) {
      res.send('Usu�rio removido com sucesso!');
    } else {
      res.send(`N�o consegui remover o usu�rio ${req.params.username}`);
    }
  })
};