'use strict';

// ele da erros que o js nao da de padrao
// undefild e um tipo no js
// nao e fortemente tipado
console.log('Bem vindo a aula do dia 30/03/2017');
/*
var x = 10;
var y = "qualquercoisa";

// var global let escopo
// let z = 11;

const c = 10; // constante
// c = 20;
console.log(c);

// Funcao

function liberarOsAlunosDaAuala(algumNome) {
  console.log(algumNome);
  return false;
}

var resposta = liberarOsAlunosDaAuala("Hello World");

console.log(resposta);

var func2 = function(2) {
  console.log(2);
}

var minhaFuncao = liberarOsAlunosDaAuala;
minhaFuncao("nao");
*/


function liberarOsAlunosDaAuala(algumNome) {
  console.log(algumNome);
  //algumNome("a");
}

var func2 = function(a) {
  console.log(a);
  return a;
}

//func2("ola");

liberarOsAlunosDaAuala(func2("chris"))
