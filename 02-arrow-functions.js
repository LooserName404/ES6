console.log('Arrow Functions(Funções de Seta/Flecha)');

let arr = [1,2,3,4,5,'teste'];

// Arrow Function
arr.map((item) => { //(params) => {função}
    return console.log(item);
});

// Arrow Function com apenas 1 parâmetro
arr.map( item => { // param => função
    return console.log(item);
});

// Arrow Function com apenas uma linha de retorno
arr.map((item) => console.log(item)); // (params) => retorno;

// Arrow Function com apenas 1 parâmetro e uma linha de retorno
arr.map(item => console.log(item)); // param => retorno;

// Função comum
arr.map(function(item) {
    return console.log(item);
});

// Exemplo e comparação
let semArrow = fetch('https://pokeapi.co/api/v2/pokemon/');
semArrow
    .then(function(data){
        return data.json();
    })
    .then(function(results){
        return console.log(results);
    })
    .catch(function(err){
        return console.log(err);
    });

let arrow = fetch('https://pokeapi.co/api/v2/pokemon/');
arrow
    .then(data => data.json())
    .then(results => console.log(results))
    .catch(err => console.log(err));

// Lexical this
let btn = document.getElementById('btnTest');
let btn2 = document.getElementById('btnTest2');

btn.addEventListener('click',function(){
    console.log(this);
});

btn2.addEventListener('click', () => {
    console.log(this);
});