const UsuarioModel = require('../models/usuario');
const ObjectId = require('mongoose').Types.ObjectId;

const UsuarioDAO = require('../usuarioDAO');
const usuarioRepo = new UsuarioDAO();
//TODO: Trocar chamadas do usuarioRepo para chamadas do model correspondente.
module.exports = {

  autenticarUsuario: ((req, res) => {
    const sucesso = usuarioRepo.autenticarUsuario(req.body.username, req.body.password);
    if (sucesso) {
      res.send('Usuário autenticado com sucesso!');
    } else {
      res.status(400).send('Nome de usuário ou senha estão incorretos');
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
      res.status(404).send(`Usuário ${req.params.username} não encontrado.`);
    }
  }),

  atualizarUsuario: ((req, res) => {
    const updatedUser = usuarioRepo.updateUsuario(req.params.username, req.body);
    if(updatedUser) {
      res.send(updatedUser);
    } else {
      res.send('Não foi possível alterar o usuário.');
    }
  }),

  removerUsuario: ((req, res) => {
    const hasRemovedSuccesfully = usuarioRepo.removerUsuario(req.params.username);
    if(hasRemovedSuccesfully) {
      res.send('Usuário removido com sucesso!');
    } else {
      res.send(`Não consegui remover o usuário ${req.params.username}`);
    }
  })
};