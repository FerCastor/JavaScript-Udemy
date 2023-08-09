function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


const min = 1;
const max = 50;
let rand = random(min, max);

console.log('Laço WHILE')   // Primeiro verifica a condição e depois executa o bloco
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand);
}

console.log()
console.log('Laço DO WHILE') // Primeiro executa o bloco e depois verifica a condição
do {
    rand = random(min, max)
    console.log(rand);
} while(rand !== 10);








/* const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M']
let controle = 0;

while (controle <= 10) {
    console.log(letras[controle]);
    controle++
} 
 */
