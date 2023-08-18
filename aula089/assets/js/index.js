// Exibir outra página dentro de uma div criada pelo js

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;

        // método get -> buscar conteudo na internet
        // assincrono = true
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // Retorna o objeto que foi buscado (sucesso)
            } else {
                reject(xhr.statusText); // Retorna o erro
            }
        })
    });

}

document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target; // Bloqueia o evento do click
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        carregaPagina(el);
    }
});


async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (err) {
        console.error(err);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}