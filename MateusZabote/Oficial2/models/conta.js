'use strict';

let users = [];

function contaDAO() {

  this.autenticarConta = (cont) => {
    return users.some(u => c.conta == cont.username && c.cpf == c.cpf);
  }


  this.criarConta = (conta) => {
    users.push(conta);
    return this.obterConta();
  }


  this.obterConta = (username) => {
    return users.find(user => cont.username === username);
  }

  this.obterContas = () => users;

  this.updateConta = (username, updatedConta) => {
    users = users.map(cont => (
      username === cont.username ? Object.assign({}, cont, updatedCont) : cont
    ));
    return obterConta(updatedCont.username);
  }

  this.removerConta = (username) => {
    const currentCont = users.find(cont => cont.username === username);
    if(currentCont) {
      users.splice(users.indexOf(currentCont), 1);
      return true;
    }
    return false;
  }
}

module.exports = contaDAO;
