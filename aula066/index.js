// Map (mapeando array)
// A diferença entre o map e o filter é o retorno final de cada um deles
// Map utiliza o valor do array original para criar um novo array
// Sempre vai retornar o mesmo tamanho do array original
// Evitar mexer no objeto original, utilizar ele somente como referência


// Dobre os números
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);
console.log(dobro)
*/


/* Para cada elemento:
>> Retorne apenas uma string com o nome da pessoa
>> Remova apenas a chave "nome" do objeto
>> Adicione uma chave ID em cada objeto
*/
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(objeto => objeto.nome);

const idades = pessoas.map(objeto => ({ idade: objeto.idade }));

const comIds = pessoas.map((objeto, indice) => {
    const newObj = { ...objeto };
    newObj.id = indice + 1;
    return newObj;
})


// console.log(pessoas);
// console.log(nomes);
// console.log(idades);
console.log(comIds);