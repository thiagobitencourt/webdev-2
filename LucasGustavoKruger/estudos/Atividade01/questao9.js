var var1; //Uma variavel var1 existe no escopo global mas sem definição de valor.

function ctrlP(val, imp) { //Uma função ctrlP é criada, a qual irá esperar dois parametros: val, imp
  console.log('ctrl'); // imprime no console a string ctrl
  var1 = "passou aqui"; // Altera o valor de var1
  return imp(val); // executa a função passada por paramtro enviando por parametro val.
}

console.log(var1);//imprime no console a variavel var1.

var1 = "impresso"; // Altera o valor de var1
var rt = ctrlP(var1, function(vlr) { //variavel rt recebe a execucao da função ctrlP, aqui a função ctrlP recebe a variavel var1, e uma função que tem como parametro a variavel vlr.
  console.log(vlr); //aqui printa o valor da variavel vlr que é o parametro esperado pela função.
  return { // retorna um objeto javascript com o atributo impresso que tera o valor da variavel vlr que é a variavel do parametro da função que está sendo passada por parametro para a função ctrlP.
    impresso: vlr
  }
});
console.log(var1); //Imprime o valor da variavel var1.
console.log(rt); //Imprime o valor da variavel rt.
