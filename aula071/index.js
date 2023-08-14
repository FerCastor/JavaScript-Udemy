// Object.defineProperty() -> define uma propriedade
// Object.defineProperties() -> define várias propriedades por vez

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // Protege o objeto para não sofrer alteração
    Object.defineProperty(this, 'estoque', {
        enumerable: true,       // mostra a chave [quando true]
        value: estoque,         // valor da chave
        writable: true,         // controla se o valor pode ser alterado
        configurable: false     // controla se pode apagar, editar ou reconfigurar a chave
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1)); // Exibe um array com as chaves existentes [se setado como false, não exibe o objeto que está protegido, no caso do exemplo acima o estoque deixaria de ser exibido]


/* function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // Protege o objeto para não sofrer alteração
    Object.defineProperty(this, 'estoque', {
        enumerable: true,       // mostra a chave [quando true]
        value: estoque,         // valor da chave
        writable: true,         // controla se o valor pode ser alterado
        configurable: false     // controla se pode apagar, editar ou reconfigurar a chave
    });
    
    /* // Define que o objeto pode ser reconfigurado
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   // mostra a chave [quando true]
        value: estoque,     // valor da chave
        writable: true,    // controla se o valor pode ser alterado
        configurable: false  // controla se pode apagar, editar ou reconfigurar a chave
    }); 
} */
/* 
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000
delete p1.estoque;
console.log(p1); */



/* 
function Produto2(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // Protege o objeto para não sofrer alteração
    Object.defineProperty(this, 'estoque', {
        enumerable: true,       // mostra a chave [quando true]
        value: function() {
            return estoque
        },         // valor da chave
        writable: false,         // controla se o valor pode ser alterado
        configurable: true       // controla se pode apagar, editar ou reconfigurar a chave
    });
}

const p1 = new Produto2('Camiseta', 20, 3);
p1.estoque = 5000
console.log(p1);
console.log(p1.estoque());
 */