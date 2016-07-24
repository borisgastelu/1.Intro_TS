// Comparacion Implicita (Regular)
//  Cohercion
console.error(4 == '4');
console.error(4 != '4');

// Comparacion Explicita (Estricta)
//  Comparar el tipo de dato y el valor
console.warn(4 === '4');
console.warn(4 !== '4');

// <, >, <=, >=

// Shortcircuit (&&)
//   Evalua primer valor FALSE y devuelve resultado
let booleano = false;
console.log(1 && true && undefined && 'hola');  // ?
console.log(true && booleano && (100 + 50));    // ?

// Default (||)
//  Evalua primer valor TRUE
console.log(false || 'Hola' || undefined);
console.log(100 || null);
