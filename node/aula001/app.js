const path = require('path'); // Módulo padrão que já existe não é preciso declarar o caminho, somente o nome do módulo
const axios = require('axios');
const { Pessoa } = require('./mod1'); // Exportação usando desconstrução (Removendo a chave pessoa de dentro do objeto declarado)
const p1 = new Pessoa('Jão');
console.log(p1);
console.log(p1.nome);

console.log(Pessoa)


/* 
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e)) */

/* const { nome, sobrenome, apresentacao } = require('./mod1');
console.log(nome, sobrenome)
console.log(apresentacao()) */

/* const apresentacao = require('./mod1').apresentacao; // Coloca a função dentro de uma variável para a utilização direta
console.log(apresentacao()); */

/* Exporta todo o módulo, permitindo utilizar todas as função contidas nele.
const mod1 = require('./mod1'); 
console.log(mod1);
console.log(mod1.apresentacao());
*/
