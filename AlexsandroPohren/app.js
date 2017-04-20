'use strict'

//tipos e valores
//tipo de um valor é a sua forma de representação
//var, let, const

const valorConstante = 10;
//valorConstante = 20;
console.log(valorConstante); //imprime o valor no terminal

//tipos
var valorInt = 10; // integer, number (numerico)
console.log(typeof valorInt); // number


var valorStr = "Hello"; //string, cadeia de caracteres
console.log(typeof valorStr); // string

var valorBooleanTrue = true; //true or false, verdadeiro e falso
var valorBooleanFalse = false;
console.log(typeof valorBooleanTrue); // boolean
console.log(typeof valorBooleanFalse); // boolean


var valorNulo = null; //nulo, vaziu, sem valor
console.log(typeof valorNulo); //object

var valorIndefinido = undefined; //nao definido
console.log(typeof valorIndefinido); //undefined

var valorObjeto = { }; //objeto
console.log(typeof valorObjeto);//object

var valorArray = [];//array
console.log(typeof valorArray);//object

function funcaoQualquer (){

}
console.log(typeof funcaoQualquer); //function




var pessoa = {
  nome: "Alexsandro",
  idade:19,
  graduado: false
};

console.log(pessoa.nome);//Alexsandro
console.log(pessoa.idade);//19

var umaVariavel = 55;

var arrayDoAlex ={
  "soescrever",
  umaVariavel,
  true,
  pessoa
};

console.log(arrayDoAlex);
