// Atribuição via desestruturação [arrays]
// ... rest (pega o resto das coisas)
// ... spread (copia a variável dentro de outra variável)

const numeros = [

//      0          1          2           Índice 0
//   0  1  2    0  1  2    0  1  2        Índice 1
    [1, 2, 3], [4, 5, 6], [7, 8, 9]
];

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2])




// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [um, , tres, , cinco, , sete] = numeros;

// console.log(um, tres, cinco);
