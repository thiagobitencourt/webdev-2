'use strict';

// Tipo e velores.
// Tipo de um valor e a sua forma de representacao
// formas de fazer variaveis
// var, let, const

/*const valorConstante = 10;
valorConstante = 20;
console.log(valorConstante); // imprime valor no console.
*/

// tipos
var valorInt = 10; // inteiro
console.log(typeof valorInt) // number

var valorStr = "Hello"; // string, cadeia de caracteres
console.log(typeof valorStr) // string

var valorBooleanTrue = true; // true or false, verdadeiro ou falso
console.log(typeof valorBooleanTrue) // boolean

var valorBooleanFalse = false; // valor falso
console.log(typeof valorBooleanFalse) // boolean

var valorNulo = null; // nulo, vazio, sem valor.
console.log(typeof valorNulo); // Object

var valorIdenfinido = undefined // nao definido
console.log(typeof valorIdenfinido); // undefined

var valorObjeto = {}; // Objeto
console.log(typeof valorObjeto) // Objeto

var valorArray = []; // Array.
var valorArray2 = new Array();
console.log(typeof valorArray) // Objeto

function funcaoQualquer(){}
console.log(typeof funcaoQualquer); // Function





/// Objetos

// Aspa
var stringComAspaDuplas = "stringQualquer";
var stringSemASpasSimples = 'StringQualquer';

var pessoa = {
  nome: "Lucas",
  idade: 24,
  graduado: false
};

console.log(pessoa.nome) // Lucas
console.log(pessoa.idade) // 24
console.log(pessoa.graduado) // false

console.log(pessoa)

var umaVariavel = 55;

var arrayDoThalles = [
  "soEscrever",
  umaVariavel,
  true.
  pessoa
]

console.log(arrayDoThalles["0"]);
console.log(arrayDoThalles[1]);
console.log(pessoa["nome"]);



// Funcao

function calcula() {
  console.log("estou dentro da funcao.");
}

calcula();
