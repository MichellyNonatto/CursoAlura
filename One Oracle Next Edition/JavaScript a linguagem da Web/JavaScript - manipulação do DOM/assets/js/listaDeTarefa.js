const criarTarefa = (evento) =>{
    evento.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const valorImput = input.value;

    return valorImput;
}


const novaTarefa = document.querySelector("[data-form-button]");


novaTarefa.addEventListener('click', criarTarefa);