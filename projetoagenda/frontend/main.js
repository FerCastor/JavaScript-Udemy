import 'core-js/stable' // // Resolve os casos de incompatibilidade com o js na versão mais recente, adaptando a execução em navegadores mais antigos
import 'regenerator-runtime/runtime';
import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

const contato = new Contato('.form-contato');
contato.init();


// import './assets/css/style.css';

