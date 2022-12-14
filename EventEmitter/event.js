const { inherits } = require('util');
const { EventEmitter } = require('events');

class People {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

inherits(People, EventEmitter)

const Eu = new People('Caio', 18);

Eu.on('buzina', () => console.log('buzina acionada'));

Eu.emit('buzina');