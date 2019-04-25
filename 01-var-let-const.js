console.log('Declaração de variáveis: var, let e const');
console.log('');
// Escopo de variável
let foo = 1;
var bar = 2;
const test = 3;
console.log('Antes: ',foo, bar, test);
if (true) {
    let foo = 5;
    var bar = 7;
    const test = 4;
    console.log('Função: ',foo, bar, test);
}
console.log('Depois: ',foo, bar, test);

console.log('');

// Definição
let v1;
var v2;
// const v3; -  Errado

// let v1 = 3; -  Errado
var v2 = 3;
const v3 = 3;

v1 = 4;
v2 = 4;
// v3 = 4; - Errado

console.log('');

//Temporal dead zone

console.log(var1);
var var1 = 10;

// Errado
// console.log(let1);
// let let1 = 10;