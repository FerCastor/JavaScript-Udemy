/*
Object.values -> retorna os valores
Object.entrie -> retorna a chave e o valor
Object.assign(des, any) -> serve para copiar um objeto (objeto origem -> objeto destino)
Object.getOwnPropertyDescriptor(o, 'prop) -> retorna o descritor da propriedade
... (spread) -> espalha as propriedades de um objeto em outro objeto

// Já visto
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty(define uma propriedade)
*/

const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Mais um produto'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outro produto'
console.log(Object.keys(produto))
console.log(Object.values(produto));
console.log(Object.entries(produto));

for(let entry of Object.entries(produto)) {
    console.log(entry)
}

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1])
}

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}

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
