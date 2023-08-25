// Leitor de arquivos

const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(valor => console.log(valor));
}

leArquivo(caminhoArquivo)

// Escrever no arquivo
// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' },
//     { nome: 'Luiza' },
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);
