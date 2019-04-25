console.log('Novos métodos p/ Array ES6');

const list = document.querySelectorAll('button');
// list.map(); - Errado, querySelector retorna uma NodeList

const listArray = Array.from(list);
listArray.map(item => console.log(item));

const arrayOf = Array.of(1,2,3,'burger','bacon',{'teste':'testando'});
console.log(arrayOf);

const findNaN = arrayOf.find(isNaN);
console.log(findNaN);

const findNaNIndex = arrayOf.findIndex(isNaN);
console.log(findNaNIndex);

const data = [
    {
        name: 'teste',
        age: 0,
        city: '?',
    },
    {
        name: 'José',
        age: 30,
        city: 'sjp',
    },
];

const jose = data.find(person => person.name === 'José');
console.log(jose);

const arr = new Array(50);
const arr2 = new Array(50);
const arr3 = [1,2,3,4,5,6,7,8,9,10,11];

arr.fill('teste');
arr2.fill('testando', 4, 14);
arr3.fill('Ronaldinho', 9, 10);

console.log(arr);
console.log(arr2);
console.log(arr3);
