/* Operadores Lógicos

    && and (e)  -> todas as expressões precisam ser verdadeiras para o retorno ser true. 
    || or (ou)  -> uma das expressões precisa ser verdadeira para retornar true.
    ! not (não) -> inverte o resultado do retorno (se o retorno for true, será exibido false e vice-versa)
*/

// sourcery skip: remove-redundant-boolean
const expressaoAnd = true && true;
const expressaoOr = false || true || false;
const expressaoNot = !true

console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);
