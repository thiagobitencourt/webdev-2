'use strict';

var valorInteiro = 42;
var valorString = "42";

var comparacao = valorInteiro == valorString;
console.log(comparacao); //comparando os valores true

var compara2 = valorInteiro === valorString;
console.log(compara2); //comparando mais a fundo os valores false

var valorA = "24";
var valorB = 11;

var valorDaSoma = valorA + valorB;
console.log("valor de valorDaSoma: ", valorDaSoma); //resultado concatena os valores = 2411
console.log("tipo do valor: ", typeof valorDaSoma); //resultado tipo string

//var multiplica = valorA * valorB;
//console.log("valor da Soma de novo: " multiplica);

var valorInt = 16;
var valorStr = "a";
//resultado NaN
console.log("valorStr * valorInt: ", valorStr * valorInt);

/*
== -> perimite que o JS faça coerção (coercion) dos valores
=== -> não perimite que o JS faça coerção. Verifica também os tipos.
 Com "!" na frente testa se é doferemte.
*/

var valorStrDenovo = "";
if (valorStrDenovo) {
  console.log("esta no if");
} else {
  console.log("esta no else");
}

var numero = 24;
if(numero) { //aqui é sempre boolean
  console.log("pasou aqui... <- ");
} else {
  console.log("passou aqui não... <-");
}

/*
valore que terão coerção para true (truthy):
String com valor
Numero diferente de 0 (zero)
objeto
array
function

valores que terão coerção para false (falsy):
String vazia
0(zero)
NaN
null
undefined

*/
