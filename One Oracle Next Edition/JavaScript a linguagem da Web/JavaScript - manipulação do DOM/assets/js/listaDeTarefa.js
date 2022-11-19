(() => {
    const criarTarefa = (evento) => {
        evento.preventDefault();

        const input = document.querySelector("[data-form-input]");
        const valorImput = input.value;
        const lista = document.querySelector("[data-list]");
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
        const conteudo = `<p class =content>${valorImput}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(concluir());
        lista.appendChild(tarefa);
        input.value = " ";
    }

    const novaTarefa = document.querySelector("[data-form-button]");
    novaTarefa.addEventListener('click', criarTarefa);

    const concluir = () => {
        const botaoConcluir = document.createElement('butto');

        botaoConcluir.classList.add('fa-solid', 'fa-check', 'check-button');

        botaoConcluir.addEventListener('click', concluirTarefa);

        return botaoConcluir
    }

    const concluirTarefa = (evento) => {
        const botaoConcluir = evento.target;
        const tarefaCompleta = botaoConcluir.parentElement;
        tarefaCompleta.classList.toggle('done');
    }
})();