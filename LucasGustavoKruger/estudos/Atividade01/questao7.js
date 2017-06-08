'use strict';

/*
### 7. Usando a sintaxe da linguagem JavaScript, defina uma função que recebe como parâmetro dois valores e que retorna um objeto que armazena os valores recebidos nos atributos a e b. Execute esta função e imprima o resultado no console.
*/
const funcao = (var1, var2) => {
  return {
    a: var1,
    b: var2
  }
}

const object = funcao('valor1 em a', 'valor2 em b');

console.log('Valor de a: ' + object.a + ' Valor de b:' + object.b);
