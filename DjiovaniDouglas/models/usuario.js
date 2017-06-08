'use strict';

/* TODO: Será utilizado para integrar com o banco de dados.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  id: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: Number,
  email: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);
*/
let users = [];

function UsuarioDAO() {
  
  this.autenticarUsuario = (user) => {
    return users.some(u => u.username == user.username && u.password == u.password);
  }

  this.criarUsuario = (usuario) => {
    users.push(usuario);
    return this.obterUsuarios();
  }

  this.obterUsuario = (username) => {
    return users.find(user => user.username === username);
  }

  this.obterUsuarios = () => users;

  this.updateUsuario = (username, updatedUser) => {
    users = users.map(user => (
      username === user.username ? Object.assign({}, user, updatedUser) : user
    ));
    return obterUsuario(updatedUser.username);
  }

  this.removerUsuario = (username) => {
    const currentUser = users.find(user => user.username === username);
    if(currentUser) {
      users.splice(users.indexOf(currentUser), 1);
      return true;
    }
    return false;
  }
}

module.exports = UsuarioDAO;