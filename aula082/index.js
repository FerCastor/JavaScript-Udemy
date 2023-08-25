// Heranças com classes
// Sempre que eu crio uma função filha que tenha extends, preciso chamar o super


class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`)
            return;
        }
        console.log('Ligando...')
        this.ligado = true;
    }
    
    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`)
            return;
        }
        console.log('Desligando...')
        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // Chama a função pai e executar dentro dessa função
        this.cor = cor;
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Você alterou o método ligar!')
    }

    falaOi() {
        console.log('Oi')
    }
}

const t1 = new Tablet('iPad', true);
console.log(t1)
t1.ligar()
t1.ligar()
t1.falaOi()



/* const s1 = new Smartphone('iPhone', 'preto', 'X');
console.log(s1)
console.log(s1.cor)
console.log(s1.modelo)
s1.ligar(); 
s1.ligar(); 
s1.desligar(); 
s1.desligar();  */


/* const celular = new DispositivoEletronico('celular', 'ligado');
celular.ligar();
celular.ligar();
celular.desligar();
celular.desligar();
console.log(celular); */
