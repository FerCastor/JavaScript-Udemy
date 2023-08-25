// Polimorfismo - forma de fazer métodos se comportarem de maneira diferente em subclasses (classes filhas de uma classe mãe/pai)

// Superclass (classe mãe/pai)
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}


Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Agência: ${this.agencia} - Conta: ${this.conta} - Saldo: R$${this.saldo.toFixed(2)}`);
}

// Estabelecer a herança correta
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Subclass (classe filha)
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

// Adicionar métodos específicos da ContaCorrente
ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, valor) {
    Conta.call(this, agencia, conta, valor);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

console.log('Dados conta corrente')
const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10)
contaCorrente.sacar(90)

console.log('Dados conta poupança')
const contaPoupanca = new ContaPoupanca(11, 22, 10);
contaPoupanca.depositar(10)
contaPoupanca.sacar(10)