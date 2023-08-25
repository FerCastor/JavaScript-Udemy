/* Retorne a soma do dobro de todos os pares
>> Filtrar os pares
>> Dobrar os valores
>> Reduzir (somar tudo)
*/

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor);

console.log(somaPares)



/* Minha solução:  
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter(valor => {
    return valor % 2 === 0
});
const dobro = pares.map(valor => valor * 2)
const soma = dobro.reduce(function (acumulador, valor) {
    acumulador += valor
    return acumulador
})

console.log(pares)
console.log(dobro)
console.log(soma) */