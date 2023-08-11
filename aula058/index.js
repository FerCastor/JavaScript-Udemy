// Função construtora -> constrói objetos [não precisa utilizar return, pois já retorna com o this.variavel]
// Função fábrica -> fabrica objetos

// Construtora => Pessoa (new) -> new Pessoa()


// Função Construtora (é convencional começar sempre com letra maiúscula)
function Pessoa(nome, sobrenome) {
    // Atributos privados
    const IdPessoa = 1234;
    const medotoInterno = function() {

    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome} diz: Sou um método`);
    }
}

// Quando chamamos uma função construtora para construir um novo objeto, NÃO podemos esquecer da palavra NEW antes do nome da função
const pessoa1 = new Pessoa('Fernanda', 'Castor')
console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
pessoa1.metodo();


const pessoa2 = new Pessoa('Roberta', 'Castor')
console.log(pessoa2)
console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
pessoa2.metodo();