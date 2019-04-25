console.log('Promises');

// pending
// resolved
// rejected

const currency = new Promise((resolve,reject) => setTimeout(() => resolve({ currency: 'Dolar', value: 4.00 }), 3000));
const foods = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(['batata', 'arroz', 'bisteca']);
    }, 500);
})

currency
    .then(response => {
        let { currency, value} = response;
        if(value > 3){
            throw new Error(`${currency} tá caro`);
        }
        console.log(`${currency}: R\$${value.toFixed(2)}`);
    })
    .catch(err => console.error(err));

foods
    .then(response =>{
        let upper = [];
        response.map(item => {
            console.log(`Comi ${item}`);
            upper.push(item.toUpperCase());
        });
        return upper;
    })
    .then(response => {
        let ul = document.createElement('ul');
        response.map(item => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
        });
        document.querySelector('#teste').appendChild(ul);
    })
    .catch(err => console.error(err));

let pokemons = fetch('https://pokeapi.co/api/v2/pokemon/');
let yugioh = fetch('https://db.ygoprodeck.com/api/v4/cardinfo.php');

Promise
    .race([pokemons, yugioh])
    .then(responses => {
        console.log(responses);
    });

Promise
    .all([pokemons, yugioh])
    .then(responses => {
        console.log(responses);
    })
