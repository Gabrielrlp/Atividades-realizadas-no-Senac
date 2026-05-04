const formulario = document.querySelector("#perguntas")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();

    const candidato = [
        nome.value,
        sobrenome.value,
        email.value,
        contato.value,
        endereco.value,
        cidade.value,
        estado.value,
        cep.value,
        pais.value,
        concorrendo.value,
        data.value,
        document.querySelector('input[name="situacao"]:checked').value,
        curriculo.value,
        testemunhos.value,
        notas.value,
    ];
        console.log(candidato);

        localStorage.setItem("candidato", JSON.stringify(candidato));

        formulario.reset();
});