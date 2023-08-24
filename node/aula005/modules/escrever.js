const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
}

// Flag W: apenas escreve, substituindo o texto que estiver no arquivo
// Flag A: adiciona o texto ao arquivo, mantendo os dados já existentes no mesmo.
// fs.writeFile(caminhoArquivo, 'Primeira linha escrita\nSegunda linha escrita\n', { flag: 'w', encoding: 'utf8' });
