console.log('Classes');

class Animal {
    constructor(kind, sound){
        this.kind = kind;
        this.sound = sound;
    }

    hello(){
        console.log(this.sound.repeat(2));
    }

    static isAnimal(animal){
        return animal instanceof Animal;
    }
}

let dog = new Animal('dog', 'au');
dog.hello();

let sound = 'meow';

console.log(Animal.isAnimal(dog));
console.log(Animal.isAnimal(sound));