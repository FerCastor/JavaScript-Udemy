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
    constructor(cor) {
        this.cor = cor;
        this.tampado = true;
    }

    tampar() {
        if (this.tampado) {
            console.log('Já estou tampado!')
        } else {
        console.log('Tampei');
        this.tampado = true;
    }}
    
    destampar() {
        if (!this.tampado) {
            console.log('Já estou destampado!');
        } else { 
        console.log('Destampado!');
        this.tampado = false;
    }}
}


const caneta = new Caneta('Azul');
console.log(caneta);
caneta.tampar();
caneta.destampar();
caneta.destampar();
caneta.tampar();
