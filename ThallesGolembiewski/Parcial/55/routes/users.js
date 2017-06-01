const UsuarioModel = require('../models/users');
const ObjectId = require('mongoose').Types.ObjectId;

const User = require('../models/users');
const UserRp = new User();

module.exports = {

  autenticarUsuario: ((req, res) => {
    const sucesso = UserRp.autenticarUsuario(req.body.username, req.body.password);
    if (sucesso) {
      res.send('Usu�rio autenticado com sucesso!');
    } else {
      res.status(400).send('Nome de usu�rio ou senha est�o incorretos');
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
      res.status(404).send('Usu�rio ${req.params.username} n�o encontrado.');
    }
  }),

  atualizarUsuario: ((req, res) => {
    const updatedUser = UserRp.updateUsuario(req.params.username, req.body);
    if(updatedUser) {
      res.send(updatedUser);
    } else {
      res.send('N�o foi poss�vel alterar o usu�rio.');
    }
  }),

  removerUsuario: ((req, res) => {
    const hasRemovedSuccesfully = UserRp.removerUsuario(req.params.username);
    if(hasRemovedSuccesfully) {
      res.send('Usu�rio removido com sucesso!');
    } else {
      res.send('N�o consegui remover o usu�rio ${req.params.username}');
    }
  })
};