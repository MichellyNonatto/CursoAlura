const Deleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('fa-solid', 'fa-trash', 'check-button-deletar');
    botaoDeleta.addEventListener('click', deletarTarefa)

    return botaoDeleta;
}

const deletarTarefa  = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();
    return botaoDeleta;
}

export default Deleta