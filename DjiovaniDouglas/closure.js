'use strict';

function funcA() {
  var x = 10;
  return function(xpto){
    console.log(xpto + x);
  }
}

var soma10 = funcA();
soma10(5); // -> 15

// (function() {}) ();
