// Fetch API & Axios (JSON)

/* com FETCH
fetch('pessoas.json')
    .then(resposta => resposta.json()) // Pega os dados do json e transforma em uma nova promise que será um json
    .then(json => carregaElementosNaPagina(json)) // Pega a promise que foi criada (em um json) e joga para a função tratar
*/


// com AXIOS <- trabalha com xmlHttpRequest por debaixo dos panos (melhor forma de fazer get)
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))


function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    for (let pessoa of json) {
        const tr = document.createElement('tr'); // Constrói a linha

        let td = document.createElement('td'); // Constrói a coluna
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td'); // Constrói a coluna
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

