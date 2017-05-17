'use strict';

//tipos e valores
//tipo de um valor é a sua forma de representação
//var, let, const

const valorConstante = 10;
//valorConstante = 20;
console.log(valorConstante); //imprimi valor no terminal

//tipos
var valorInt = 10; //integer, number (número)
console.log(typeof valorInt);//number
var valorStr = "Hello"; //string, cadeia de caracteres
console.log(typeof valorStr)//String
var valorBooleanTrue = true; //true or false, verdadeiro ou falso
console.log(typeof valorBooleanTrue);//Boolean
var valorBooleanFalse = false;

var valorNulo = null; //Nulo, vaziu, sem valor
console.log(typeof valorNulo);//Object
var valorIndefinido = undefined; //não definido
console.log(typeof valorIndefinido); //undefined

var valorObjeto = {}; //Objeto
console.log(typeof valorObjeto); //object

//var str = "World";
//str = new String("");
//var num = new number();
//var object = new object();

var valorArray  = []; //Array
console.log(typeof valorArray);//Objct

function funcaoQualquer(){

}

console.log(typeof funcaoQualquer); //function

console.log(typeof batataFrita); //Undefined

var pessoa = {
  nome: "Lucas",
  idade: 24,
  graduado: false
};

console.log(pessoa.nome); //Lucas
console.log(pessoa.idade); // 24
console.log(pessoa['graduado']); //false

var umaVariavel = 55;

var arrayDoThalles = [
  "sóescrever",
  umaVariavel,
  true,
  pessoa
]

console.log(arrayDoThalles);
console.log(arrayDoThalles[0]);

//função
function calcula(){
  console.log("Estou dentro de uma função");
}

calcula();

var intervalo = function calculaDenovo(){
  console.log("função calcula denovo");
};

intervalo();

var objeto = {
  bar: "sasa",
  foo: intervalo
};

console.log(objeto.foo());
objeto.foo();

var calculaOutraVez = function(valor1){

  console.log(valor1);

  var variavel1 = {
    attr: 69
  };
  var variavel2 = [
    "qualquer",
    variavel1
  ];

  var erro = {
    xpto: "e131"
  };

  console.log(erro.xpto);

  var variavelFunc = function(){
    console.log("variavelFunc....");
  }

  return variavelFunc;
}

calculaOutraVez(); //Sem valor
calculaOutraVez("Com valor"); //Com valor

var funcRetorno = calculaOutraVez("deve ter um retorno"); // Com retorno
//console.log(funcRetorno.attr);
console.log(funcRetorno());

var funcParametro = function(){
  console.log("Função que passei por parametro");
}

function recebeFuncao(funcaoRecebida){
  console.log(funcaoRecebida);
  funcaoRecebida();
}
recebeFuncao(funcParametro);
