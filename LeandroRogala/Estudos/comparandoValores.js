'use strict';

//Coercion
var valorInteiro = 42;
var valorString = "42";
// Tem valor igual e tipos diferentes

console.log(typeof valorInteiro); //Number
console.log(typeof valorString); //String

var comparacao = valorInteiro == valorString; // Comparação do valor da variavel
console.log(comparacao); //true

var compara2 = valorInteiro === valorString; //Comparação do tipo da variavel
console.log(compara2); //false

var valorA = "24"; // String
var valorB = 11; //Number

var valorDaSoma = valorA + valorB;
console.log("valor de valorDaSoma: ", valorDaSoma); //2411
console.log("tipo do valor: ", typeof valorDaSoma); //String

valorB = "11";
var agoraMultiplica = valorB * valorA;
console.log("valor do SomaDeNovo: ", agoraMultiplica); //264
console.log("tipo do valor: ", typeof agoraMultiplica); //Number

var valorInt = 11;
var valorStr = "a";
console.log("valorStr + valorInt: ", valorStr * valorInt); //NaN (Not a Number) - Não é um número.

/*
  == -> Permite que o JS faça coerção (coercion) dos valores
  === -> Não permite a coersão (coercion). "Verifica os tipos do valor".
  com "!" na frente testa se é diferente
  ====, == , !=, !==
*/

var compara = valorInt === valorStr; //Boolean
var valorBoleano = true; //Boolean

var valorObjeto = { attr: "atributo string" };

if(valorObjeto){
  console.log("Passou no if");
} else {
  console.log("Passou no else");
}

var valorStrDenovo = "";

if(valorStrDenovo){
  console.log("Passou no if ");
} else {
  console.log("Passou no else");
}

var valorIntDenovo = 0;
if(valorIntDenovo) {
  console.log("esta no if do int");
}else{
  console.log("Esta no else do int");
}

/* valores que terão coerção para true:
  String com valores;
  Número diferente de 0;
  Objeto;
  Array;
  function;

  valores que terão coerção para false:
  String vazia;
  Numero 0 ou -0;
  NaN;
  null, undefined;
*/
