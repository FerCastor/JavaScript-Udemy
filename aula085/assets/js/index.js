class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.validInputs();
        const senhasValidas = this.validPasswords();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado.')
            this.formulario.submit();
        }
    }

    validPasswords() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.createError(senha, 'Campos senha e repetir senha precisam ser iguais.');
            this.createError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if (senha.value.length < 6|| senha.value.length > 12) {
            valid = false;
            this.createError(senha, 'A senha precisa ter entre 3 e 12 caracteres.');
        }


        return valid;
    }

    validInputs() {
        let valid = true;
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let input of this.formulario.querySelectorAll('.validar')) {
            let label = input.previousElementSibling.innerText;
            if (!input.value) {
                this.createError(input, `Campo "${label}" não pode estar em branco`)
                valid = false;
            }
            if (input.classList.contains('cpf')) {
                if (!this.validaCPF(input)) {
                    valid = false;
                }
            }

            if (input.classList.contains('usuario')) {
                if (!this.validaUsuario(input)) {
                    valid = false;
                }
            }
        }
        return valid;
    }

    validaUsuario(input) {
        const usuario = input.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(input, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/[a-zA-Z0-9]+$/g)) {
            this.createError(input, 'Nome do usuário precisa conter apenas letras e/ou números.');
        }

        return true;
    }

    validaCPF(input) {
        const cpf = new ValidaCPF(input.value);
        if (!cpf.valida()) {
            this.createError(input, 'CPF inválido!')
            return false;
        }
        return true
    }

    createError(input, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        input.insertAdjacentElement('afterend', div);
    }

}



const valida = new ValidaFormulario();