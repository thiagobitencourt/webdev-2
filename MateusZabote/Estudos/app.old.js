'use strict';

console.log('Bem vindo a aula do dia 30/03/2017');
var x =10;
var y = "qualquercoisa";

// let z =10;
//let k ="outra string";
//const c =10;
//c=20;
//console.log(c);
//função
function liberarOsAlunosDaAula(algumNome){
  console.log(algumNome);
  algumNome("olá ...");
  return 20;
}

//var resposta = liberarOsAlunosDaAula(50);
//console.log(resposta);

var func2 = function(a){
  console.log(a);

}

func2("olá");
liberarOsAlunosDaAula(func2);
//var minhaFuncao = liberarOsAlunosDaAula;
//minhaFuncao("não");
