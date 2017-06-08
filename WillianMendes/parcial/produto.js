'use strict';

const prod = {
	id: 0,
	nome: '',
	codigo: 0,
	quantidade: 0,
	disponivel: false
};

var arrayProdutos = [];

function produto() {

  this.criarProduto = function(user) {
    console.log("criar produto ", user);
    arrayProdutos.push(user);
  }

  this.obterTodosOsProdutos = function() {
    return arrayProdutos;
  };

  this.deletarProduto=function(id){
  	arrayProdutos.splice();
  }

  this.obterProduto = function(id) {
    console.log("obter produto");
    var produtoRetorno;
    arrayProdutos.forEach(function(produto) {
      if(produto.id === id) {
        produtoRetorno = produto;
      }
    });
    return produtoRetorno;
  }
}


module.exports = produto;