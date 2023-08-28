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
         // e.preventDefault();
         // alert('FORMULÁRIO NÃO ENVIADO');
         this.validate(e);
      });
   }
   
   validate(e) {
      const el = e.target;
      const emailInput = el.querySelector('input[name="email"]');
      const passwordInput = el.querySelector('input[name="password"]');
      let error = false;
      if(!validator.isEmail(emailInput.value)) {
         this.errors.push('Email inválido!');
         req.flash("errors", contato.errors);
         req.session.save(() => res.redirect("/contato/index"));
			return;
      }
      
      
      console.log(emailInput.value, passwordInput.value);
   }
}