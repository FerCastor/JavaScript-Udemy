// Herança (Delegação)

// Produto -> aumento, desconto
// Camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco -= (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual) {
    this.preco += (this.preco * (percentual / 100));
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Define a herança 
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // Define a herança 
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
              return;
            }
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);    // Linka os prototypes
Caneca.prototype.constructor = Caneca;                  // Cria o contrutor

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 10, 'Preta', 20);
const caneca = new Caneca('Caneca', 15, 'porcelana', 5);
caneca.estoque = 100;

caneca.aumento(10)
console.log(caneca.estoque)
console.log(caneca)
console.log(camiseta)
console.log(produto)