// Escreva uma função  chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). 
// Retorne true se a imagem estiver no modo paisagem.

// Gera números aleatórios
function getRandom(min, max) {
    const res = Math.random() * (max - min) + min;
    return Math.floor(res)
}

let min = 720;
let max = 1920;

let altura = getRandom(min, max);
let largura = getRandom(min, max);

const ePaisagem = (largura, altura) => largura > altura;

console.log(`Altura: ${altura} x Largura: ${largura} -> ${ePaisagem(largura, altura)}`);