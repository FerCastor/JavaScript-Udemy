import validator from 'validator';

export default class Login {
   constructor(formClass) {
      this.form = document.querySelector(formClass);
   }
   
   init() {
      this.events();
   }
   
   events() {
      if (!this.form) return;
      this.form.addEventListener('submit', e => {
         e.preventDefault();
         this.validate(e);
      });
   }
   
   validate(e) {
      const el = e.target;
      const emailInput = el.querySelector('input[name="email"]');
      const passwordInput = el.querySelector('input[name="password"]');
      let error = false;
      
      // Limpa mensagem de erro
		const clearErrorMessage = (containerElement) => {
			let existingError = containerElement.querySelector(".error-message");
			if (existingError) {
				containerElement.removeChild(existingError);
			}
		};
      
      if(!validator.isEmail(emailInput.value)) {
         error = true;
			let div = document.createElement("div");
			let divError = document.querySelector(".lead");

			clearErrorMessage(divError);

			let text = document.createTextNode("Insira um e-mail válido.");
			div.appendChild(text);
			div.className = "error-message";
			div.style.backgroundColor = "#fbd3d8";
			div.style.color = "darkred";
			div.style.border = '1px solid rgba(126, 52, 67, 0.3)';
			div.style.borderRadius = "5px";
         div.style.marginTop = "5px";
         div.style.padding = "3px";
         div.style.fontWeight = "400";
			divError.appendChild(div);
			return;
      }
      
      if(passwordInput.value.length < 6 || passwordInput.value.length > 20) {
         error = true;
			let div = document.createElement("div");
			let divError = document.querySelector(".lead");

			clearErrorMessage(divError);

			let text = document.createTextNode("A senha precisa ter entre 6 e 20 caracteres.");
			div.appendChild(text);
			div.className = "error-message";
			div.style.color = "red";
			divError.appendChild(div);
			return;
			return;
      }
      
      if (!error) el.submit();
   }
}