// Métodos úteis para Promises
// No then é quando for resolvida
// Catch é para tratar erro


function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo,) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                return reject('BAD VALUE');
            }
            resolve(msg.toUpperCase() + ' -> Passei na promise'); // Pode receber somente 1 parâmetro
            return;
        }, tempo)
    });
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject

// Promise.all => Passa-se um array com promessas ou com valores já resolvidos -> Tenta resolver todas e se alguma der erro, todas as promises são rejeitadas
// Promise.race => Retorna a primeira promessa resolvida -> Tenta resolver uma a uma e a promise que for resolvida primeiro é retornada (se a primeira resolvida der erro, será retornado o erro)
// Promise.resolve => Retorna a promessa resolvida
// Promise.reject => Retorna uma promessa rejeitada

const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', aleatorio(1, 5)),
    esperaAi('Promise 2', aleatorio(1, 5)),
    esperaAi('Promise 3', aleatorio(1, 5)),
    // esperaAi(1000, 1000),
    // 'Outro valor',
];




function baixaPagina() {
    const emCache = true;
    if (emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Página baixada', 3000);
    }
};

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro', e))



    /*
function baixaPagina() {
    const emCache = false;
    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Página baixada', 3000);
    }
};
*/



/* 
Promise.race(promises)
.then(valor => {
    console.log(valor);
}).catch(erro => {
    console.log(erro);
});
 */

/*
Promise.all(promises).then(valor => {
    console.log(valor);
}).catch(erro => {
    console.log(erro);
});
*/