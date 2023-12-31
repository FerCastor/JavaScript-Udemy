// Factory Functions + Polimorfismo
// Composição (Mixing)

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const falar = {
    falar() {
        console.log(`Olá! Aqui é ${this.nome}`);
    },
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
}

// const pessoaPrototype = { ...falar, ...comer, ...beber }
const pessoaPrototype = Object.assign({}, falar, comer, beber)

const p1 = criaPessoa('Fer', 'Castor');
const p2 = criaPessoa('Ro', 'Castor');
