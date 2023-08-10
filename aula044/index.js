// Tratamento de erros

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números')
    }
    return x + y;
}

try {
    console.log(soma(2, 3))
    console.log(soma(2, 'y'))
} catch (error) {
    console.log('Alguma coisa amigável para o usuário!')
    console.log(error)
}