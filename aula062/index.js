// Valor por referência
// Evita-se utilizar o shift e unshift, pois podem afetar a performance do software

const nomes = ['Fernanda', 'Castor'];
const nome = nomes.join(' '); // Une os valores em uma só string, separando os valores com espaço
console.log(nome);


/* const nomes = new Array('Nome 0', 'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6');
const novo = nomes.slice(1, 3);
console.log(novo) */

/* const nome = 'Fernanda Castor';
const nomes = nome.split(' ');
console.log(nomes[0]);
console.log(nomes[1]) */


// const nomes = ['Nome 1', 'Nome 2', 'Nome 3'];
/* const nomes = new Array('Nome 1', 'Nome 2', 'Nome 3');
console.log(nomes);
nomes[2] = 'Nome 3.1';

console.log(nomes);
delete nomes[2];

console.log(nomes); */

/* 
const nomes = new Array('Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6');
const novo = [...nomes];
console.log('Lista antiga: ' + nomes);
console.log('Nova lista: ' + novo);

const removido = novo.pop(); // Remove o ultimo item da array e coloca numa lista de removidos
const removidoInicio = novo.shift(); // Remove o primeiro item da array e coloca numa lista de removidos
console.log('Lista novo após o pop')
console.log('Lista antiga: ' + nomes);
console.log('Nova lista: ' + novo);

console.log(nomes.length);
console.log('Removidos da lista: ' + removido)
console.log('Removidos da lista [inicio]: ' + removidoInicio)

nomes.push('Nome 4')
console.log(nomes)
console.log(novo)

nomes.unshift('Nome 5')
console.log(nomes)
nomes.unshift('Nome 6')
console.log(nomes) */


