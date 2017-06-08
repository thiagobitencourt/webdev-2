const UsuarioModel = require('../models/users');
const ObjectId = require('mongoose').Types.ObjectId;

const User = require('../models/users');
const UserRp = new User();

module.exports = {

  autenticarUsuario: ((req, res) => {
    const sucesso = UserRp.autenticarUsuario(req.body.username, req.body.password);
    if (sucesso) {
      res.send('Usuário autenticado com sucesso!');
    } else {
      res.status(400).send('Nome de usuário ou senha estão incorretos');
    }
  }),

  criarUsuario: ((req, res) => {
    const updatedUserList = UserRp.criarUsuario(req.body);
    res.send(updatedUserList);
  }),

  getUsers: ((req, res) => {
    res.send(UserRp.getUsers());
  }),

  obterUsuario: ((req, res) => {
    const users = UserRp.obterUsuario(req.params.username);
    if (users) {
      res.send(users);
    } else {
      res.status(404).send('Usuário ${req.params.username} não encontrado.');
    }
  }),

  atualizarUsuario: ((req, res) => {
    const updatedUser = UserRp.updateUsuario(req.params.username, req.body);
    if(updatedUser) {
      res.send(updatedUser);
    } else {
      res.send('Não foi possível alterar o usuário.');
    }
  }),

  removerUsuario: ((req, res) => {
    const hasRemovedSuccesfully = UserRp.removerUsuario(req.params.username);
    if(hasRemovedSuccesfully) {
      res.send('Usuário removido com sucesso!');
    } else {
      res.send('Não consegui remover o usuário ${req.params.username}');
    }
  })
};