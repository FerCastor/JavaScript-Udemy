// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Fernanda',
    sobrenome: 'Castor',
    idade: 28
};


for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}



/* 
const frutas = ['Maçã', 'Banana', 'Morango'];

for (let indice in frutas) {
    console.log(frutas[indice]);
} */

