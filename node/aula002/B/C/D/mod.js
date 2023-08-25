module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }
    latir() {
        console.log(`${this.nome} está latindo.`)
    }
}

/* Exportando um valor literal 
module.exports = 2; */

/* Exportando uma função anonima
module.exports = function(x, y) {
    return x * y;
}
 */