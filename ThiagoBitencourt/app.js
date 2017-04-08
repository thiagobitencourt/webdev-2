'use strict';

// tipos e valores
// tipo de um valor é a sua forma de representação
// var, let, const

var variavelGlobal = "Não muda isso";

const valorConstante = 10;
// valorConstante = 20;
// console.log(valorConstante); // imprime valor no terminal??

// tipos
var valorInt = 10; // integer, number (número)
console.log(typeof valorInt); // number

var valorStr = "Hello"; // string, cadeia de caracteres
console.log(typeof valorStr); // varchar????, string

var valorBooleanTrue = true; // true or false, verdadeiro ou falso
var valorBooleanFalse = false;
console.log(typeof valorBooleanTrue); // boolean

var valorNulo = null; // nulo, vaziu, sem valor.
console.log(typeof valorNulo); // Object

var valorIndefinido = undefined; // não definido
console.log(typeof valorIndefinido); // undefined

var valorObjeto = {}; // Objeto
console.log(typeof valorObjeto); // object

var valorArray = []; // Array.
console.log(typeof valorArray); // object

function funcaoQualquer() {
}
console.log(typeof funcaoQualquer ); // function

// Aspas
var stringComAspasDuplas = "stringqualquer";
var stringComAspasSimples = 'stringqualquer'; // Mesma coisa

var pessoa = {
  nome: "Lucas",
  idade: 24,
  graduado: false,
  'numero cpf': "Indigente"
};

console.log(pessoa.nome); // Lucas
console.log(pessoa.idade); // 24

console.log(pessoa['nome']); //Lucas
console.log(pessoa['idade']); // 24

console.log(pessoa['peso']);
console.log(pessoa.peso);

pessoa['2'] = 40;
var atributo = "numero cpf";
console.log(pessoa[atributo]); //['numero cpf']);

var umaVariavel = 55;

var arrayDoThalles = [
  "sóescrever",
  umaVariavel,
  true,
  pessoa
];

console.log(arrayDoThalles[0]);

// função
function calcula() {
  console.log("estou dentro da função");
}

var chamada = function() {
  console.log("função calcula denovo");
};
chamada();

var objeto = {
  bar: "asdsa",
  foo: chamada
};

objeto.bar; // "asdsa";
console.log(objeto.foo); // [Funcation]
objeto.foo();

console.log("AQUI PRIMEIRO >>>>>> ", variavelGlobal);

var calculaOutraVez = function(valor1) {
  console.log(valor1);

  var variavelGlobal;

  var variavel1 = {
    attr: 69
  };
  var variavelArray = [
    "qualquer",
    variavel1
  ];

  variavelGlobal = {
    xpto: " AQUI ÓÓ >>>>> pdskas"
  };

  console.log("AQUI ÓÓ >>>>>", variavelGlobal); // "pdskas"

  var variavelFunc = function() {
    console.log("variavelFunc...");
  }
  return variavelFunc;
}

calculaOutraVez(); // Sem valor
calculaOutraVez("Com valor"); // Com valor
var funcRetorno = calculaOutraVez("deve ter um retorno"); // Com retorno

console.log("AQUI AGORA >>>>>>>>> ", variavelGlobal);


// calculaOutraVez(function() {
//
// });

function recebeFuncao(funcaoRecebida) {
  console.log(funcaoRecebida);
  funcaoRecebida();
}

var funcParametro = function() {
  console.log('função que eu passei por parâmetro');
}
recebeFuncao(funcParametro);
