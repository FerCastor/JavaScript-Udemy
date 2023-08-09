// Atribuição via desestruturação [OBJETO]

const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Castor',
    idade: 28,
    endereco: {
        rua: 'Av Brasil',
        numero: 420
    }
};

// Atribuição via desestruturação
// const { nome: usuario = '', sobrenome, idade } = pessoa // Podemos mudar o nome da variável
// console.log(usuario, sobrenome)


// const { endereco: {rua, numero}, endereco} = pessoa
// console.log(rua, numero, endereco)

const { nome, ...resto} = pessoa;
console.log(nome, resto);