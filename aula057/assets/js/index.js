function criaCalculadora() {
    return {
        // Atributos
        display: document.querySelector('.display'), // público


        // Métodos
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', e => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.apagaNumero();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaNumero() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch (error) {
                alert('Conta inválida!');
                return;
            }
        },

        pressionaEnter() {
            document.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.realizaConta();
                }
            });
        },
        
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();