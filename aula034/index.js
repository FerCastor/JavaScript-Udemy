// Estrutura de repetição FOR

const frutas = ['Maçã', 'Pêra', 'Uva', 'Melancia'];
for (fruta in frutas){
    console.log(frutas[fruta])
}

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice: ${i} -> ${frutas[i]}`)
}

/* for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i} -> ${i % 2 === 0 ? 'Par' : 'Impar'}`)
}


for (let i = 10; i >= 0; i--) {
    console.log(`Linha ${i} -> ${i % 2 === 0 ? 'Par' : 'Impar'}`)
}
 */