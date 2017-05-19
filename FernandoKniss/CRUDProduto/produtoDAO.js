'use strict';

var arrayProdutos = [];

function Produto() {

  this.criarProduto = function(id) {
    arrayProdutos.push(id);
  }

  this.obterTodosOsProdutos = function() {
    return arrayProdutos;
  };

  this.obterProdutos = function(descricao) {
    console.log("obter produto");
    var produtoRetorno;
    arrayProdutos.forEach(function(produto) {
    });
    return produtoRetorno;
  }

this.removerProdutos = function(id) {
  var produtoIndex;
  arrayProdutos.forEach(function(produto, index) {
    if (produto.id === id) {
      produtoIndex = index;
    }
  });
    if (typeof produtoIndex !== 'undefined') {
    arrayProdutos.splice(produtoIndex, 1);
    return true;
    } else {
    return false;
    }
  }

    this.alterarProdutos = function(descricao, newProduto) {
        var alterou = false;
        arrayProdutos.forEach(function (produto) {
          if (usuario.descricao === descricao) {
            usuario.descricao = newUser.descricao;
            alterou = true;
      }
    });
    return alterou;
  }
}
// var usu = new Usuario();
// console.log(usu);
// usu.autenticarUsuario("um nome de usuario");

module.exports = Usuario;
