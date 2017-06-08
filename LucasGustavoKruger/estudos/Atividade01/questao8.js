'use strict';

var variavelGlobal = 1; // Esssa variavel pode ser acessada por qualquer função.

const funcao = () => {
  var variavelDoEscopoDaFuncao = 2;
  console.log(variavelGlobal); //Saida será: 1
  console.log(variavelDoEscopoDaFuncao); //Saida será: 2
}

funcao();

console.log(variavelGlobal); //Saida será: 1
console.log(variavelDoEscopoDaFuncao); //Teremos um erro pois a variável não está definida no escopo global.
