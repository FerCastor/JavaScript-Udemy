const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = '!@#$%&*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, numeros, maiusculas, minusculas,  simbolos) {
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        numeros && senhaArray.push(geraNumero());
        maiusculas && senhaArray.push(geraMaiuscula()); // Avaliação de curto-circuito. [se true, prox passo (após &&)]
        minusculas && senhaArray.push(geraMinuscula());
        simbolos && senhaArray.push(geraSimbolo());
    };

    for (let i = senhaArray.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);
        
        // guarda de um índice aleatório da lista
        const elemento = senhaArray[i - 1];
        
        senhaArray[i - 1] = senhaArray[indiceAleatorio];
        
        senhaArray[indiceAleatorio] = elemento;
    }





    return senhaArray.join("").slice(0, qtd);
}


// geraSenha(5, true, true, true, true); // Testa
