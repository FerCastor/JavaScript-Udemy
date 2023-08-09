/*
FOR [clássico] -> Geralmente com iteráveis (arrays ou strings)
FOR IN -> Retorna o índice ou chave (string, array ou objetos)
FOR OF -> Retorna o valor em si (iteráveis, arrays ou strings)
*/


const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Castor'
};

for (let index in pessoa) {
    console.log(index, pessoa[index]);
}

// const nome = 'Fernanda Castor';
// const nomes = ['Fernanda', 'Roberta', 'Anna']

// nomes.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// })

/* for (let valor of nome) {
    console.log(valor);
} */

// for (let valor of nomes) {
//     console.log(valor)
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for (let i = 0; i < nome.length; i++) {
// console.log(nome[i])
// }