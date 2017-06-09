//# Willian Mendes do Rosario
'use strict';

var valorInteiro=42;
var valorString="42";
console.log(typeof valorInteiro);
console.log(typeof valorString);

var comparacao=valorString==valorInteiro;
console.log(comparacao);

var comparacao2=valorString===valorInteiro;
console.log(comparacao2);

var valorA="24";
var valorB=11
var soma=valorA+valorB;
console.log(soma);

var varInt=16;
var varStr="a";

console.log("valor =", varInt*varStr);

function funA(){
	var x =10;
	return function(xpto){
		console.log(xpto+x);
	}
}

var soma10=funA();
soma10(5);