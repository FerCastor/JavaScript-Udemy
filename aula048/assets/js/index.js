const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Cria uma li
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Cria um botão
function criaButtonApagar(li) {
    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'Apagar';
    btnRemove.setAttribute('class', 'btn-remove');
    btnRemove.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnRemove);
};

// Cria um ouvinte de eventos para quando a tecla enter for pressionada. Se pressionada, envia o dado
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

// Limpa o campo de input
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Cria a tarefa
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    const button = criaButtonApagar(li);
    limpaInput();
    salvarTarefas();
}

// Bloqueia o envio de tarefas com o input vazio
btnTarefa.addEventListener('click', () => {
    // sourcery skip: use-braces
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

// Deleta a tarefa ao clicar no botão remover
document.addEventListener('click', function(e) {
    const el = e.target;    
    if (el.classList.contains('btn-remove')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

// Salva as tarefas em um JSON dentro do navegador
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

// Retorna as tarefas salvas
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()