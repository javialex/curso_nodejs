var b1 = Buffer.alloc(20);
var b2 = Buffer.from('Esto sólo es texto');

/**
 * Podemos enviar por tramas
 */
console.log('Esto es buffer 1');
console.log(b1);
console.log('Esto es buffer 2');
console.log(b2);

console.log('Esto es buffer 1 modificado');
b1[0]=34;
console.log(b1);