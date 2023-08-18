// Fetch API (GET)

document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target; // Bloqueia o evento do click
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        carregaPagina(el);
    }
});


async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if (response.status !== 200) {
            throw new Error('Nosso erro!');
        }
        const html = await response.text();
        carregaResultado(html)
    } catch (e) {
        console.log(e)
    }

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}



fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) {
            throw new Error('Nosso erro');
        }
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.log(e));