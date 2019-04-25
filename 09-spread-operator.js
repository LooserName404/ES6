console.log('Spread Operator e Rest Params');

// Spread Operator
let front = ['HTML', 'CSS', 'JavaScript'];
let back = ['PHP', 'Laravel'];
let fullstack = [...front, 'SQL', ...back];
console.log(fullstack);

function chamar(p1,p2,p3){
    console.log(`Funcionários ${p1}, ${p2} e ${p3} compareçam à recepção.`);
}
const pessoas = ['José', 'João', 'Júlio'];
chamar(...pessoas);

// Rest Params
function concatStr(strIni, ...strs){
    return `${strIni} ${strs.map(str => `${str}`).join(', ')}.`;
}
console.log(concatStr('Eu escrevo','letras','números','símbolos','etc'));

const strings = ['JS','PHP','comida'];
console.log(concatStr('Eu gosto de',...strings));