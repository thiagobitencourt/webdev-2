'use strict';

/*console.log("Bem vindo a aula do dia 30/03/2017");

var x = 10;
var y = "qualquercoisa";
*/

const valorConstante = 10;

var valorInt = 10; //number
console.log(typeof valorInt);

var valorStr = "Hello"; //String
console.log(typeof valorStr);

var valorBooleanTrue = true; //boolean
var valorBooleanFalse = false;

console.log(typeof valorBooleanTrue);

var valorNulo = null; //object
console.log(typeof valorNulo);

var valorIndefinido = undefined; //não definido
console.log(typeof valorIndefinido);

var valorOjeto = {}; //objetct
console.log(typeof valorOjeto);

var varloArray = []; //array

function funcaoQualquer(){

}

console.log(typeof funcaoQualquer); //function

//Objetos, criar um objeto
var pessoa = {
  nome: "Lucas",
  idade: 24,
  graduado: false,
  atributo: "indigente"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);
console.log(pessoa['nome']);
console.log(pessoa['idade']);

console.log(pessoa['2']);

pessoa['2'] = 2;
console.log(pessoa['2']);

var atributo = "numero cpf";
console.log(pessoa['atributo']);

//aspas tem o mesmo resultado
var stringAspasSimples = 'qualquercoisa';
var stringAspasDuplas = "qualquercoisa";

var umaVariavel = 55;

//arrays
var arrayDeTeste = [
  "Sóescrever",
  umaVariavel,
  true,
  pessoa
];

//imprimir Arrayinteiro
console.log(arrayDeTeste);
//imprimir pelo index
console.log(arrayDeTeste['2']);

//função
function nome(){
  console.log("Estou na funcao");
}

nome();

var chamada = function calculaDenovo(){
  console.log("funcao calcula denovo");
}
chamada();

//objeto com funcao
var objeto = {
  bar: "bala",
  foo: chamada
}

console.log(objeto.foo);

objeto.foo();


var calculaOutraVez = function(valor1){
  console.log(valor1);
  return "retorno da funcao";
}

calculaOutraVez();//semvalor
calculaOutraVez("Com valor") //com valor
var funcRetorno = calculaOutraVez("Deve ter retorno");
console.log(funcRetorno);

var calculaOutraVez1 = function(valor2){
  console.log(valor2);
  var variavel = {
    attr: 69
  };
  return variavel;
}
var funcRetorno2 = calculaOutraVez1("valor");
console.log(funcRetorno2);

var calculaOutraVez2 = function(valor3){
  console.log(valor3);
  var variavel = {
    attr: 69
  };
  var variavelArray = [
    "qualquer",
    variavel
  ];
  return variavelArray;
}
var funcRetorno3 = calculaOutraVez2("valor");
console.log(funcRetorno3['0']);
console.log(funcRetorno3[1].attr);

var calculaOutraVez3 = function(valor4){
  console.log(valor4);
  var variavel = {
    attr: 69
  };
  var variavelArray = [
    "qualquer",
    variavel
  ];
  var variavelFunc = function(){

    console.log("VariavelFunc...");
  }
  return variavelFunc;
}

var funcRetorno4 = calculaOutraVez3("Denovo...");
console.log(funcRetorno4);

function recebeFuncao(funcaoRecebida){
  console.log(funcaoRecebida);
  funcaoRecebida();
}

var funcParametro = function(){
  console.log('Funcao que passei');
}
recebeFuncao(funcParametro);

var variavel2 = {
  xpto: "1234"
}

console.log(variavel2.xpto);

//let z = 10;
//let k = "qualquercoisa";

//const c = 10;
//console.log(c);

// Funcao
// function liberarOsAlunosDaAula(){
  // return 20;
// }

// var resposta = liberarOsAlunosDaAula(50);
// console.log(resposta);

// function liberarOsAlunosDaAula(algumAluno){
  // console.log(algumAluno);
  // return 20;
// }

//var func2 = function(a){
  //console.log(a);
//}

//func2("oi");

// var minhaFuncao = liberarOsAlunosDaAula;
// minhaFuncao("Não");

/*function liberarOsAlunosDaAula1(algumAluno1){
  console.log(algumAluno1);
  algumAluno1("Olá ...");
  return 20;
}

var func3 = function(a){
  console.log(a);
}

func3("Olá");

liberarOsAlunosDaAula1(func3)
*/
/*
function liberarOsAlunosDaAula(algumNome){
  console.log(algumNome);
  return algumNome;
}
var func2 = function(a){
  console.log(a);
}
func2("Olá1234");

liberarOsAlunosDaAula(func2)
*/
