console.log('Desestruturação de Objetos e Arrays - Destructuring');

const data = {
    name: 'José',
    surname: 'Silva',
    items: {
        food: 'bolo',
        obj: 'colher',
    }
}

let {name, surname = 'Andrade'} = data; // padrão, padrão com default
let {food, obj: objeto} = data.items; //padrão dentro do objeto, outro nome dentro do objeto
console.log(`${name} ${surname} come ${food} usando ${objeto}.`);

const arr = ['Disney', 'Caixa', 25, 'Caqui'];
const [parque,banco,idade,fruta] = arr;
console.log(`Comi ${fruta} no parque ${parque}, paguei com banco ${banco} aos ${idade} anos.`);

let a = 10;
let b = 20;
console.log(`a = ${a}; b = ${b}`);
[a,b] = [b,a];
console.log(`a = ${a}; b = ${b}`);