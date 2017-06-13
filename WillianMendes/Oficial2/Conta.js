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

   		for (var i=0; i < arrayContas.length; i++) {
   			if( arrayContas[i].id==id){
   				contaRetorno=arrayContas[i];
   			}
   		}
    	return contaRetorno;
  	}

	this.sacar=function(conta,valor){
		if(conta.saldo>=valor){
			conta.saldo=conta.saldo-valor;
			return true;
		} else{
			return false;	
		}
	}

	this.depositar=function(conta,valor){
		conta.saldo=conta.saldo+valor;
	}

	this.tranferencia=function(conta,valor,dest){
		if(dest){
			if(conta.saldo>=valor){
				conta.saldo=conta.saldo-valor;
				dest.saldo=dest.saldo+valor;
				return true;
			} else{
				return false;	
		}
	}}



}


module.exports = Conta;
