'use strict'
//id, nome, codigo, quantidade, disponivel
// objeto usuario
var arrayProdutos = [];

function Produto(){

  this.criarProduto = function(produto){
    arrayProdutos.push(produto);
  }

  this.obterTodosProdutos = function(){
    return arrayProdutos;
  }

  this.obterProduto = function(id){
    var produtoRetorno = arrayProdutos.find(function(produto){
      return produto.id == id;
    });
    return produtoRetorno;
  }

  this.removerProduto = function(id){
    var produtoIndex;
    arrayProdutos.forEach(function(produto, index){
      if(produto.id == id){
        produtoIndex = index;
      }
    });
    if(typeof produtoIndex !== "undefined"){
      arrayProdutos.splice(produtoIndex, 1);
      return true;
    }else{
      return false;
    }
  }

  this.alterarProduto = function(id, newProduto){
    var alterou = false;
    arrayProdutos.forEach(function(produto){
      if(produto.id == id){
        produto.id = newProduto.id;
        produto.nome = newProduto.nome;
        produto.codigo = newProduto.codigo;
        produto.quantidade = newProduto.quantidade;
        produto.disponivel = newProduto.disponivel;
        alterou = true;
      }
    });
    return alterou;
  }
}


module.exports = Produto;
