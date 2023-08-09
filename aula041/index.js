// Escreva uma função que recebe 2 números e retorne o maior deles

/* Minha solução */

// Gera números aleatórios
function getRandom(min, max) {
    const res = Math.random() * (max - min) + min;
    return Math.floor(res)
}

// Verifica qual valor é o maior
function verificaMaior(x, y) {
    if (x > y) {
        return x;
    } else if (x < y) {
        return y;
    } else {
        return `Não há maior, pois ambos são iguais.`;
    }
};

let min = 1;
let max = 50;

let x = getRandom(min, max);
let y = getRandom(min, max);

console.log(`Comparando os valores: ${x} e ${y}`)
let resultado = verificaMaior(x, y);
console.log(`O número maior é: ${resultado}`);



/* Código do professor 

const max = (x, y) => x > y ? x : y;
console.log(max(2, 4));
*/