console.log('Default parameters');


// <= ES5
function hello(name, surname){
    name = name || 'Pa';
    surname = surname || 'Drão';
    console.log('Hello ' + name + ' ' + surname + '!');
}

// ES6+

function helloNew(name = 'Pa', surname = 'Drão',){
    console.log(`Hello ${name} ${surname}!`);
}

hello();
hello('José',);
hello(null,'Silva');
hello('José','Silva');
helloNew();
helloNew('José');
helloNew(null,'Silva'); //Primeiro padrão obrigatório neste caso
helloNew('José','Silva',);