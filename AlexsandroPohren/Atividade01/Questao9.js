/*
Questão 9:
Veja o código a seguir, descreva o que está acontecendo e,
 em sua ordem correta,
 quais informações serão impressas na tela?
*/

 var var1;
function ctrlP(val, imp) {
  console.log('ctrl');
  var1 = "passou aqui"; // Altera o valor de var1
  return imp(val);
}

console.log(var1);
var1 = "impresso"; // Altera o valor de var1
var rt = ctrlP(var1, function(vlr) {
  console.log(vlr);
  return {
    impresso: vlr
  }
});
console.log(var1);
console.log(rt);

/*resposta
var1 esta recebendo o valor "impresso"
ctrlP esta recebendoo valor [function]
ctrlP passa a receber o nome val, que recebe o valor var1
ctrlP passa a receber o nome imp, que passa a receber a [funcion]
rt possui um valor vazio
imp retorna val que possui o valor { impresso: 'impresso' }
var1 passa a receber o valor "passou aqui"
var1 ira imprimir o valor impresso na tela
*/

/*
Ordem de Impressão do codigo

$ undefined
$ "ctrl"
$ "impresso"
$ "passou aqui"
$ { impresso: 'impresso' }

*/
