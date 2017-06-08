const UsuarioModel = require('../models/usuario');
const ObjectId = require('mongoose').Types.ObjectId;

const Usuario = require('../models/usuario');

module.exports = {

  criarUsuario: ((req, res) => {
    const usuario = new Usuario({
      _id: new ObjectId(),
      username: req.body.username,
      password: req.body.password,
      age: req.body.age,
      email: req.body.email
    });
    usuario.save().then((err, results) => {
      if (err) throw err;
      res.status(200).send('Usuário criado com sucesso!');
    });
  }),

  obterUsuarios: ((req, res) => {
    Usuario.find((err, usuarios) => {
      if (!usuarios) {
        res.status(404).send("Nenhum usuário encontrado.");
      } else {
        res.send(usuarios);
      }  
    });
  }),

  obterUsuario: ((req, res) => {
    Usuario.findOne({ _id: new ObjectId(req.params.id) }, (err, usuario) => {
      if (!usuario) {
        res.status(404).send('Usuário não encontrado.');
      } else {
        res.send(usuario);
      }
    });
  }),

  atualizarUsuario: ((req, res) => {
    const usuario = new Usuario({
      _id: new ObjectId(req.params.id),
      username: req.body.username,
      password: req.body.password,
      age: req.body.age,
      email: req.body.email
    });

    Usuario.findByIdAndUpdate(new ObjectId(req.params.id), usuario, (err, updatedUser) => {
      if (err) throw err;
      console.log(`Usuário atualizado com sucesso!`);
      res.send(updatedUser);
    });
  }),

  removerUsuario: ((req, res) => {
    Usuario.findByIdAndRemove(new ObjectId(req.params.id), (err) => {
      if (err) throw err;
      res.send(`Usuário ${req.params.id} removido com sucesso!`);
    });
  })
};