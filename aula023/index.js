/*
    && -> false && true -> false "o valor mesmo"
    || -> true || false -> retorna o valor literal do true

    FALSY:
    false
    0 
    '' "" ``
    null / undefined
    NaN
    [Qualquer valor que seja diferente dos valores acima (começando a partir de false), retorna true]
    (Se um dos valores for false, será exibido o false. Se todos os valores forem true, o retorno será o último valor que foi lido)
*/

const corUsuario = null;
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)

// || [OR]
// console.log(0 || false || null || 'Fer' || true);


// && [AND]
/*
function falaOi(){
    return 'Oi';
}

let vaiExecutar = true;

console.log(vaiExecutar && falaOi());
*/