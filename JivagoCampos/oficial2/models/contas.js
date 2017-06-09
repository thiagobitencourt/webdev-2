'use strict'

var identificador =0;

function Conta(){

  this.criarConta = function(conta){
    conta.nome = identificador++;
    arrayProdutos.push(conta);
  }

  this.obterTodasContas = function(){
    return arrayContas;
  }

  this.obterContas = function(id){
    var contaRetorno = arrayContas.find(function(contas){
      return produto.id == id;
    });
    return contaRetorno;
  }

  var arrayContas = [];

  this.removerConta = function(id){
    var contaIndex;
    arrayContas.forEach(function(conta, index){
      if(conta.id == id){
        contaIndex = index;
      }
    });
    if(typeof contaIndex !== "undefined"){
      arrayContas.splice(contaIndex, 1);
      return true;
    }else{
      return false;
    }
  }

  this.alterarConta = function(id, newConta){
    var alterou = false;
    arrayProdutos.forEach(function(produto){
      if(produto.id == id){
        produto.nome = newProduto.nome;
        alterou = true;
      }
    });
    return alterou;
  }
}

module.exports = Produto;
