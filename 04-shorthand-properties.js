console.log('Shorthand Properties');

let firstName = 'Thyago';
let lastName = 'Cunha';
let age = 19;


// >= ES5 
var p1 = { 
    firstName: firstName,
    lastName: lastName,
    age: age,
    printDados: function() {
        console.log(this.firstName + ' ' + this.lastName + ': ' + this.age + ' anos.');
    }
}
console.log(p1);
p1.printDados();
p1 = 5;
console.log(p1);

// ES6+
const p2 = {
    firstName,
    lastName,
    age,
    printDados() {
        console.log(`${this.firstName} ${this.lastName}: ${this.age} anos.`);
    }
}
console.log(p2);
p2.printDados();
//p2 = 5; - Errado
