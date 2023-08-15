// Criando Classe
// Para passar parâmetros para uma classe precisamos de um constructor dentro da classe (constructor pode ou não existir, vai depender da necessidade de passar parâmetros para a classe)
// A classe joga automaticamente os seus métodos dentro do prototype

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

const p1 = new Pessoa('Fer', 'Castor');
console.log(p1);


class Caneta {
    constructor(cor, estado) {
        this.cor = cor;
        this.estado = estado;
    }

    tampar() {
        if (this.estado !== 'tampado') {
            console.log('Tampei');
        } else {
            console.log('Já estou tampado!')
        }
        return this.estado = 'tampado';
    }
    
    destampar() {
        if (this.estado !== 'destampado') {
            console.log('Destampado!');
        } else {
            console.log('Já estou destampado!');
        }
        return this.estado = 'destampado';
    }
}


const caneta = new Caneta('Azul', 'destampado');
console.log(caneta);
caneta.tampar();
caneta.destampar();
