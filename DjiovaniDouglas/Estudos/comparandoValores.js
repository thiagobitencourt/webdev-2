'use strict'

var valorInteiro = 42;
var valorString = "42";
//tem valor igual e tipos diferentes

console.log(typeof valorInteiro); //vai imprimir number
console.log(typeof valorString); //string

var comparacao = valorInteiro == valorString; //boolean
console.log(comparacao); // true

var compara2 = valorInteiro === valorString;
console.log(compara2); // false. tipos diferentes

var valorA = "24"; //string
var valorB = 11; //number

var valorDaSoma = valorA + valorB;
console.log("valor de valorDaSoma: ", valorDaSoma);//2411
console.log("Tipo do valor: ", typeof valorDaSoma);

var multiplica = valorA * valorB;
console.log("valor da SomaMultiplica: ", multiplica);

var divide = valorA / valorB;
console.log("valor da SomaDivide: ", divide);

var valorInt = 16;
var valorStr = "a";

//NaN - not A Number - não é um numero
console.log("valorStr * valorInt: ", valorStr * valorInt); //NaN

/*
== -> Permite que o JS faça coerção (coercion) dos valores
=== -> Não permite a coerção (coercion). "Verifica também os tipos"
com "!"  na frente testa se é diferente
===, ==, !=, !==
*/

var compara = valorInt === valorStr; //Boolean
var valorBoleano = true; //Boolean

var valorObjeto = { attr: "atributo string" };

if(valorObjeto){ // Coercion
  console.log("passou no if");
} else {
  console.log("passou no else");
}

var valorStrDenovo = "";

if(valorStrDenovo){
  console.log("esta no if");
} else {
  console.log("esta no else");
}

var valorIntDeNovo = 0;
if(valorIntDeNovo){
  console.log("esta no if do int")
} else {
  console.log("esta no else do int");
}

var numeroDoLucas = 24;
if(numeroDoLucas){
  console.log("O Lucas é ...");
} else {
  console.log("O Lucas não é ...")
}

/* valores que terão coerção para true (truthy):
String com valor
Número diferente diferente de 0 (zero);
Objeto
Array
Function

- valores que terão coerção para false (falsy):
"" - String vazia
0, zero
NaN
null
undefined

*/
