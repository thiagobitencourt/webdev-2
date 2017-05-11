'use strict';

var valorInteiro = 42;
var valorString = "42";
//tem valor igual e tipos diferentes

console.log(typeof valorInteiro); //number
console.log(typeof valorString);//string


var comparacao = valorInteiro==valorString;// boolean
console.log(comparacao);//true

var compara2 = valorInteiro === valorString; //=== não deixa transformar os tipos
console.log(compara2);//false. tipos diferentes

var valorA = "24";//string
var valorB = 11;//number

var valorDaSoma= valorA+valorB;
console.log("valor de valorDaSoma: ",valorDaSoma);//2411
console.log("tipo do valor: ",typeof valorDaSoma);//string

var somaDenovo = valorA+valorB;//
console.log("valor do somaDenovo: ", somaDenovo);//35

var multiplica = valorA *valorB;//
console.log("valor do multiplica: ", multiplica);

var valorInt = 16;
var valorStr="a";
//Nan - not A Number - não é um numero.
console.log("valorStr * valorInt: ",valorStr*valorInt);

/*
== -> Permite que o JS faça coerção (coercion) dos valores
=== ->Não permite a coerção(coercion)."verifica tambem os tipos"
com "!" na frente testa se é diferente
===, ==, !=, !==

*/

// truthy e falsy

var compara = valorInt === valorStr;//booblean
var valorBooleano= true;// boolean

var valorObjeto = {attr:"atributo string"};

if(valorObjeto){//coercion
  console.log("passou no if");
}else{
  console.log("passou no else");
}

var valorStrDenovo = "";
if(valorStrDenovo){
  console.log("esta no if");
}else{
  console.log("esta no else");
}

var valorIntDenovo = 0;
if(valorIntDenovo){
  console.log("esta no if do int");
}else{
  console.log("esta no else do int");
}

/*
-Valores que terão coerção para true:
string com valor
numero diferente de 0 (zero);
Objeto
Array
Function

-valores que terão coerção para false:
"" -string vazia
0, zero
NaN
null
undefined
*/
