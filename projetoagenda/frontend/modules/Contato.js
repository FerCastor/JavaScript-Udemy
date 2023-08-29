import validator from "validator";

export default class Contato {
	constructor(formContato) {
		this.form = document.querySelector(".form-contato");
		this.init();
	}

	init() {
		this.events();
	}

	events() {
		if (!this.form) return;
		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			this.validate(e);
		});

		const inputFields = this.form.querySelectorAll('input, textarea');
		inputFields.forEach((input) => {
			input.addEventListener("input", () => {
				this.clearErrorMessage(input);
			});
		});
	}

	clearErrorMessage(inputField) {
		const containerElement = inputField.closest(".form-group");
		let existingError = containerElement.querySelector(".error-message");
		if (existingError) {
			containerElement.removeChild(existingError);
		}
	}

	validate(e) {
		const el = e.target;
		const nomeInput = el.querySelector('input[name="nome"]');
		const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
		const emailInput = el.querySelector('input[name="email"]');
		const telefoneInput = el.querySelector('input[name="telefone"]');
		let error = false;

		// Limpa mensagem de erro
		const clearErrorMessage = (containerElement) => {
			let existingError = containerElement.querySelector(".error-message");
			if (existingError) {
				containerElement.removeChild(existingError);
			}
		};

		if (nomeInput.value === "") {
			error = true;
			let div = document.createElement("div");
			let divError = document.querySelector(".div-nome");

			clearErrorMessage(divError);

			let text = document.createTextNode("O campo nome não pode estar vazio!");
			div.appendChild(text);
			div.className = "error-message";
			div.style.color = "red";
			divError.appendChild(div);
		}

		// Validação de e-mail e telefone
		if (telefoneInput.value === "" && emailInput.value === "") {
			error = true;
			let div = document.createElement("div");
			let divError = document.querySelector(".lead");

			clearErrorMessage(divError);

			let text = document.createTextNode(
				"Para salvar um contato insira um e-mail ou número de telefone."
			);
			div.appendChild(text);
			div.className = "error-message";
			div.style.color = "red";
			divError.appendChild(div);
		} else if (
			emailInput.value !== "" &&
			!validator.isEmail(emailInput.value)
		) {
			error = true;
			let div = document.createElement("div");
			let divError = document.querySelector(".div-email");

			clearErrorMessage(divError);

			let text = document.createTextNode("Insira um e-mail válido!");
			div.appendChild(text);
			div.className = "error-message";
			div.style.color = "red";
			divError.appendChild(div);
		} else if (
			telefoneInput.value !== "" &&
			!isValidPhoneNumber(telefoneInput.value)
		) {
			error = true;
			let div = document.createElement("div");
			let divError = document.querySelector(".div-telefone");

			clearErrorMessage(divError);

			let text = document.createTextNode(
				"Insira um número de telefone válido!"
			);
			div.appendChild(text);
			div.className = "error-message";
			div.style.color = "red";
			divError.appendChild(div);
		}

		function isValidPhoneNumber(phoneNumber) {
			// Remover todos os caracteres que não sejam dígitos
			const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

			// Verificar se o número possui pelo menos 10 dígitos (pode variar dependendo do país)
			if (cleanedPhoneNumber.length < 10) {
				return false;
			}
			return true;
		}
      
      if (!error) {
         el.submit();
      }
	}
}
