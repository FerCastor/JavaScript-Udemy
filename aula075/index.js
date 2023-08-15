// Manipulando Prototype
// Não recomendável utilizar __proto__, pois pode atrapalhar a performance

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
};

/* 
const p1 = new Produto('Camiseta', 50);
const p2 = new Produto('Caneca', 15);
p1.desconto(50);
console.log(p1);
p1.aumento(100);
console.log(p1);

p2.desconto(50);
console.log(p2);
p2.aumento(100);
console.log(p2); */

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 33
    },
});

p3.aumento(10);
console.log(p3)




/* // New Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__: Object.prototype <- acontece por debaixo dos panos, sempre que o objeto é criado
};

// New Object -> Object.prototype
const objB = {
    chaveB: 'B',
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); 
Object.setPrototypeOf(objC, objB); 
console.log(objB.chaveA)
console.log(objC.chaveB)
console.log(objC.chaveA) */