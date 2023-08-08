// [] = array
// {} = objeto

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome, sobrenome, idade
//     };
// }

// const pessoa1 = criaPessoa('Fernanda', 'Castor', 28);
// console.log(pessoa1.sobrenome);


const pessoa1 = {
    nome: 'Fernanda',
    sobrenome: 'Castor',
    idade: 28,

    fala() {
        console.log(`Minha idade é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();