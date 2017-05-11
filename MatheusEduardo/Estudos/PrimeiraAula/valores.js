'use strict';

// Tipos e valores
// Tipo de um valor é a sua forma de representação
// var, let, const
const valorConstante = 10;
console.log(valorConstante);

var valorInt = 10;
console.log(typeof valorInt);

var valorStr = "Hello";
console.log(typeof valorStr);

var valorBoolean = true || false;
console.log(typeof valorBoolean);

var valorNulo = null;
console.log(typeof valorNulo);

var valorIndefinido = undefined;
console.log(typeof valorIndefinido);

var valorObjeto = { };
console.log(typeof valorObjeto);

var valorArray = [];
console.log(typeof valorArray);

var str = new String("");
console.log(typeof str);

var num = new Number(12);
console.log(typeof num);

function foo() {}
console.log(typeof foo);

var pessoa = {
  nome: "Lucas",
  idade: 24,
  graduado: false
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['graduado']);
