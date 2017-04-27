'use strict';

var valorInteiro = 42;
var valorString = "42";
// Tem valor igual e tipos diferentes

console.log(typeof valorInteiro); // Number
console.log(typeof valorString); // String

var comparacao = valorInteiro == valorString; // Boolean
console.log(comparacao); // true

var compara2 = valorInteiro === valorString;
console.log(compara2); // false. tipos diferentes?

var valorA = "24"; // String
var valorB = 11; // String

var valorDaSoma = valorA + valorB;
console.log("valor de valorDaSoma: ", valorDaSoma); // 2411
console.log("tipo do valor: ", typeof valorDaSoma); // string

var multiplica = valorA * valorB;
console.log("valor do SomaDenovo: ", multiplica);

var valorInt = 16;
var valorStr = "a";
// NaN - Not a Number - Não é um número.
console.log("valorStr * valorInt: ", valorStr * valorInt);// NaN
/*
  == -> Permite que o JS faça
    coerção (coercion) dos valores
  === -> Não permite a coerção (coercion).
    "Verifica também os tipos"
  com "!" na frente testa se é diferente
  ===, ==, !=, !==
*/
var compara = valorInt === valorStr; //Boolean
var valorBoleano = true; // Boolean

var valorObjeto = { attr: "atributo string" };
if(valorObjeto){ // Coercion
  console.log(" passou no if");
} else {
  console.log("passou no else");
}
var valorStrDenovo = "";
if(valorStrDenovo) {
  console.log("esta no if");
} else {
  console.log("esta no else");
}

var valorIntDenovo = 0;
if(valorIntDenovo) {
  console.log("esta no if do int");
} else {
  console.log("esta no else do int");
}
var numeroDoLucas = 24;
if(numeroDoLucas) {
  console.log("O Luquinhas é ...");
} else {
  console.log("O Luquinhas não é ...");
}

/*
- Valores que terão coerção para true (truthy):
  String com valor
  Número diferente de 0 (zero);
  Objeto
  Array
  Function

- Valores que terão coerção para false (falsy):
  ""  - string vazia
  0, zero
  NaN
  null
  undefined
*/
