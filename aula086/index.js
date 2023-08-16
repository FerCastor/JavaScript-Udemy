// Promises

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo,) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject('BAD VALUE');
        }
            setTimeout(() => {
            resolve(msg); // Pode receber somente 1 parâmetro
        }, tempo)
    });
}


esperaAi('Conexão com o BD', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando os dados na base', aleatorio(1, 3))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da base')
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibindo os dados da base');
    })
    .catch(e => {
        console.log('ERRO: ', e)
    });

    console.log('Exibido antes de todos os promisses')
