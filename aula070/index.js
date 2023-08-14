// Revisando Objetos
// Objetos são compostos de chave: valor

// Factory Function / Constructor Function / Classes-> para criar objetos


// Constructor Function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // Object.freeze(this); // Bloqueia a alteração (e a criação) de qualquer valor dentro de um objeto
}

// a palavra new cria um objeto vazio e atrela a palavra this dentro da função ao objeto
const pessoa1 = new Pessoa('Fernanda', 'Castor');
// Object.freeze(pessoa1); // Protege o objeto para não aceitar mudança
delete pessoa1.nome; // Deleta o valor da chave declarada
console.log(pessoa1)

const pessoa2 = new Pessoa('Roberta', 'Castor');
console.log(pessoa2)


/* 
// Factory Function
function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome, 
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const pessoa1 = criaPessoa('Fernanda', 'Castor');
console.log(pessoa1.nomeCompleto) 
*/



/* 
// Constructor Function
const pessoa = new Object();
pessoa.nome = 'Fernanda';
pessoa.sobrenome = 'Castor';
pessoa.idade = 28;
pessoa.falarNome = function() {
    return (`Olá! Meu nome é ${this.nome}`);
}
pessoa.getDataNascimento = function() {
    const dataAtual = new Date();
    return `Ano de nascimento: ${dataAtual.getFullYear() - this.idade}`;
}

console.log(pessoa.falarNome());
console.log(pessoa.getDataNascimento())
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

for (let chave in pessoa) {
    console.log(pessoa[chave])
}

delete pessoa.nome;
console.log(pessoa) */



/*
const pessoa = {
    nome: 'Fernanda', 
    sobrenome: 'Castor'
};

const chave = 'nome'
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa[chave])
console.log(pessoa['sobrenome'])
*/