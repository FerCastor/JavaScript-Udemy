// O pai de todo objeto em JS é Object.prototype
// Exemplo: data -> Date.prototype -> Object.prototype

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () =>'original'+ this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora
const data = new Date() // <- Date = Função Construtora

console.dir(pessoa1)
console.dir(data)
console.dir(data.getFullYear())
console.dir(data.toLocaleDateString())

Pessoa.prototype.estouAqui = 'Oi'
Pessoa.prototype === pessoa1.__proto__