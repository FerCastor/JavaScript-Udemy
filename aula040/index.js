// BREAK e CONTINUE

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

do {
    let numero = numeros[i];
    
    if (numero === 2) {
        console.log('Pulei o 2...');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++
        break;
    }

    i++;
    
} while (i <= 9);




/* for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2')
        continue; // Pula o valor que se refere a condição (próxima iteração)
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo... ')
        break;  // Para a execução do laço e sai do bloco
    }


    console.log(numero);
} */