'use strict'

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
 * Usando a sintaxe da linguagem JavaScript, defina uma fun��o que recebe 
 * como par�metro dois valores e que retorna um objeto que armazena os valores 
 * recebidos nos atributos a e b. 
 * 
 * Execute esta fun��o e imprima o resultado no console.
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
  /* Acabou de definir dentro da fun��o.
   * Importante: com 'use strict' n�o vai permitir a interpreta��o da linha abaixo.
   * Para que o console interprete, descomente e remova o 'use strict'.
   */
  // variavelDentroDaFuncao = 2;
  console.log(variavelGlobal); // 123
  variavelGlobal = 2325;
  console.log(variavelGlobal); // 2325
  //console.log(variavelDentroDaFuncao); // 2 (descomente e remova o 'use strict' para funcionar)
}
console.log(variavelGlobal); // 123
/**
 * A vari�vel variavelDentroDaFuncao n�o foi definida no escopo global, e sim dentro da fun��o.
 * Se executar o console.log abaixo, ir� dar ReferenceError, acusando que a vari�vel n�o foi definida.
 * 
 * console.log(variavelDentroDaFuncao);
 */
showScopeToTheTeacher();
// Fim da quest�o 8.
