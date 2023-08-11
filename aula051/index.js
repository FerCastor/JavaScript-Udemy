// return -> retorna um valor e termina a função
// Quando há uma função dentro da outra e uma retorna a outra, é um retorno da função em si, sem a execução da mesma

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
const resultado1 = duplica(2)
const resultado2 = triplica(2)
const resultado3 = quadriplica(2)
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)



/* function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala("Mundo");
console.log(fala);
console.log(resto); */


/* function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const pessoa1 = criaPessoa('Fer', 'Castor');
console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

const pessoa2 = {
    nome: 'Robbie',
    sobrenome: 'Jackson',
}

console.log(pessoa2)
console.log(pessoa2.nome)
console.log(pessoa2.sobrenome) */

/* document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    const p = document.createElement('p')
    p.innerHTML = 'Texto de exemplo';
    p.style.color = 'yellow';
    document.body.appendChild(p)
}); */