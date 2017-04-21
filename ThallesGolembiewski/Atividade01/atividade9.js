'use strict';

/*
Veja o código a seguir, descreva o que está acontecendo e, em sua ordem correta, quais informações serão impressas na tela?

var var1;                               // Variavel global sem valor

function ctrlP(val, imp) {              // Função com dois parametros de entrada
  console.log('ctrl');                  // Imprime valor fixo
  var1 = "passou aqui";                 // Altera dado global
  return imp(val);                      // Executa função passada via parametro
}

console.log(var1);                      // Imprime variavel 

var1 = "impresso";                      // Altera o valor de var1
var rt = ctrlP(var1, function(vlr) {    // Variavel que recebe retorno da função, sendo que o segundo parâmetro é uma função
  console.log(vlr);                     // Imprime parâmetro
  return {                              // Retorno da função
    impresso: vlr                       // Objeto criado e associado ao mesmo tempo no retorno, este objeto recebe um parâmetro
  }
});
console.log(var1);                      // Imprime variavel
console.log(rt);                        // Imprime variavel

*/