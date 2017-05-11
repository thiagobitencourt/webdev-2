'Use strict';
//tipos e valores
//tipo de um valor é a sua forma de representação
//var, let, const
const valorConstante = 10;
//valorConstante =20;
//console.log(valorConstante);//imprime valor no terminal

//tipos
var valorInt = 10; //inteiro,number (numero)
console.log(typeof valorInt);//imprime tipo do valor

var valorStr = "Hello"; //cadeia de caracteres
var valorBooleanTrue = true; //true or false
var valorBooleanFalse = false; //true or false

var valorNulo = null; // nulo, vaziu, sem valor
var valorIndefinido = undefined; //não definido

var valorObjeto = { }; //objeto

var str = "world";
str = new String(""); //forma não literal de criar uma string
var num = new Object();

var valorArray = []; //Array é um tipo especial de object

function funcaoQualquer(){ // function

}
//Aspas
//"StringQualquer" 'StringQualquer';//não tem difereça as Aspas

//Objetos

var pessoa = {
  nome: "Lucas",
  idade: 24 ,
  graduado: false,
  "numero cpf" : "indigente"
};

console.log(pessoa.nome);//imprime o nome
console.log(pessoa.idade);// imprime a idade

console.log(pessoa['nome']);//imprime o nome
console.log(pessoa['idade']);// imprime a idade

pessoa['2'] = 40;
var atributo = "numero cpf";
console.log(pessoa[atributo]); //['numero cpf']);


//Array
var umaVariavel = 55;

var arrayDoThalles = [
  "sóescrever",
  umaVariavel,
  true,
  pessoa
];



console.log(arrayDoThalles["0"]);
console.log(pessoa["nome"]);


//Função

function Calcula() {
console.log("Estou dentro da função");

//  var a;
//  var obj ={};
//  var arr = {};
//
//  function x(){
//
//  }
}

Calcula();

var chamada = function calculaDenovo(){
  console.log("função calcula denovo");
};

chamada();

var objeto = {
  bar: "asda",
  foo: chamada
};

objeto.bar;//
console.log(objeto.foo);// diz que é uma functione mostra o nome
objeto.foo();// chama oque esta dentro da fução

var calculaOutrVez = function(valor1){
  console.log(valor1);
  var variavel1 ={
    attr: 69
  };

  var variavelArray =[
    "qualquer",
    variavel1
  ];

  var variavelFunc = function(){
    console.log("variavelFunc...");
  }

return variavelFunc;
//  return variavelArray;
  //return " Retorno da função";
}

calculaOutrVez();//sem valor
calculaOutrVez("Com valor");
var funcRetorno = calculaOutrVez("deve ter um retorno");//com retorno

console.log(funcRetorno);
console.log(funcRetorno.attr);
//console.log( funcRetorno[1].attr);
console.log(funcRetorno());

function recebeFuncao(funcaoRecebida){
  console.log(funcaoRecebida);
  funcaoRecebida();
}

var funcParametro = function(){
  console.log("Função que eu passei por parametro");
}
recebeFuncao(funcParametro);
