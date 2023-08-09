const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 0
    {tag: 'section', texto: 'Frase 4'}, // 0
    {tag: 'footer', texto: 'Frase 3'}, // 0
];

/* Solução do Professor */
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);



/* Meu código
// Acessando o elemento onde você deseja adicionar os elementos criados
const container = document.querySelector('.container');

// Iterando sobre o array de elementos
elementos.forEach(elemento => {
    // Criando um novo elemento com base na tag especificada no objeto
    const novoElemento = document.createElement(elemento.tag);

    // Definindo o texto do novo elemento com base no texto especificado no objeto
    novoElemento.textContent = elemento.texto;

    // Adicionando o novo elemento ao container
    container.appendChild(novoElemento);
});

 */