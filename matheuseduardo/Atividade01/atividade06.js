//'use strict'

/**
 * 6.
 * Usando a sintaxe da linguagem JavaScript, crie um objeto com um atributo que 
 * tenha um valor do tipo string, um atributo do tipo number 
 * e um atributo com valor do tipo array. Atribua este objeto a uma constante.
 */
const objeto = {
  atributoString: '',
  atributoNumber: 2123,
  atributoArray: []
};

/**
 * 7.
 * Usando a sintaxe da linguagem JavaScript, defina uma função que recebe 
 * como parâmetro dois valores e que retorna um objeto que armazena os valores 
 * recebidos nos atributos a e b. 
 * 
 * Execute esta função e imprima o resultado no console.
 */
function someFunction(valorA, valorB) {
  return {
    a: valorA,
    b: valorB
  };
}

console.log(someFunction(1, 2)); // { a: 1, b: 2 }

/**
 * 8. Descreva o funcionamento de um escopo em JavaScript
 */
var variavelGlobal = 123;

function showScopeToTheTeacher() {
  variavelDentroDaFuncao = 2; // Acabou de definir dentro da função
  console.log(variavelGlobal); // 123
  variavelGlobal = 2325;
  console.log(variavelGlobal); // 2325
  console.log(variavelDentroDaFuncao); // 2
}
console.log(variavelGlobal); // 123
/**
 * A variável variavelDentroDaFuncao não foi definida no escopo global, e sim dentro da função.
 * Se executar o console.log abaixo, irá dar ReferenceError, acusando que a variável não foi definida.
 * 
 * console.log(variavelDentroDaFuncao);
 */
showScopeToTheTeacher();
// Fim da questão 8.
