'use strict';

//tipos e valores
//tipo de um valor é a sua forma de representação
//var, let, const

const valorConstante = 10;
//valorConstante = 20;
//console.log(valorConstante); //imprime valor no terminal...

//tipos
var valorInt = 10; //integer, number (numero)
console.log(typeof valorInt);
var valorStr = "Hello"; //string, cadeia de caracteres
console.log(typeof valorStr);
var valorBooleanTrue = true; //true or false, verdadeiro ou falso
console.log(typeof valorBooleanTrue);
var valorBooleanFalse = false;
console.log(typeof valorBooleanFalse);
var valorNulo = null; //nulo, vazio, sem valor
console.log(typeof valorNulo);
var valorIndefinido = undefined; //não definido
console.log(typeof valorIndefinido);
var valorObjeto = {}; //objeto
console.log(typeof valorObjeto);
var valorArray = []; //Array
console.log(typeof valorArray);//objetc

function funcaoQualquer(){

}
console.log(typeof funcaoQualquer);

var pessoa = {
  nome: "Lucas",
  idade: 24,
  graduado: false
};

console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa['nome']);
console.log(pessoa['graduado']);


var umaVariavel = 20;

var arrayDoThalles = [
  "sóescrever",
  umaVariavel,
  true,
  pessoa
];

console.log(arrayDoThalles[0]);
