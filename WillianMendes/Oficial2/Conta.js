'use strict';


const Cont={
	id: 0,
	nome: "",
	email: "",
	numero: 0,
	saldo: 0
};

var arrayContas=[];

function Conta() {

	this.criarConta=function(conta){
		console.log("criar conta ", conta);
    arrayContas.push(conta);
	}

	this.obterTodasAsContas = function() {
    return arrayContas;
  };

  this.deletarProduto=function(id){
  	arrayProdutos.splice();
  }


   this.obterConta = function(id) {
    console.log("obter conta");
    var contaRetorno;
    arrayContas.forEach(function(conta) {
      if(conta.id === id) {
        contaRetorno = conta;
      }
    });
    return contaRetorno;
  }

this.sacar=function(conta,valor){
	if(conta.saldo>=valor){
		conta.saldo=conta.saldo-valor;
		console.log("foi sacado: ",valor, "ainda possui: ",conta.saldo);
	}
}







}


module.exports = Conta;
