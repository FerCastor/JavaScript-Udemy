/*
Object.values
Object.entrie
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop)
... (spread)

// Já visto
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty(define uma propriedade)
*/




// SPREAD
/* const produto = {nome: 'Produto', preco: 1.8};
const caneca = { 
    ...produto,
    material: 'porcelana'
};

caneca.nome = 'Outro nome';
console.log(produto);
produto.nome = 'Teste'
console.log(caneca); */


/* const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;

outraCoisa.nome = 'Outro produto'
outraCoisa.preco = '2.5'
console.log(produto);
// produto.nome = 'Teste'
// console.log(outraCoisa);
 */
