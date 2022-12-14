import Concluir from './components/conclui.js'
import Deleta from "./components/deleta.js"

    const criarTarefa = (evento) => {
        evento.preventDefault();

        const input = document.querySelector("[data-form-input]");
        const valorImput = input.value;
        const lista = document.querySelector("[data-list]");
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class =content>${valorImput}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(Concluir());
        tarefa.appendChild(Deleta());

        lista.appendChild(tarefa);
        input.value = " ";
    }

    const novaTarefa = document.querySelector("[data-form-button]");
    novaTarefa.addEventListener('click', criarTarefa);
   
