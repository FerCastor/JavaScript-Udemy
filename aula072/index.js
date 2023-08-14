// defineProperty => Getter (pegar o valor) & Setters (definir o valor)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque

    // Protege o objeto para não sofrer alteração
    Object.defineProperty(this, 'estoque', {
        enumerable: true,       // mostra a chave [quando true]
        configurable: true,     // controla se pode apagar, editar ou reconfigurar a chave
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor digitado não é um número!')
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1); // Exibe um array com as chaves existentes [se setado como false, não exibe o objeto que está protegido, no caso do exemplo acima o estoque deixaria de ser exibido]

p1.estoque = '500'
console.log(p1.estoque);