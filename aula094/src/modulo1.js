// Deve ser importado com o mesmo nome que foi exportado
export const nome = 'Fer';
export const sobrenome = 'Castor';
export const idade = 28;

export function soma(x, y) {
    return x + y;
}

export default (x, y) => x * y; 


// export { nome as default, sobrenome, idade, soma };
// export { nome as nome2, sobrenome, idade, soma };

/* export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
} */


// quando tiver a palavra default, indica que é o valor padrão que é exportado do módulo.
