const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    limparErros();

    let valido = true;

    // ===== CAMPOS =====
    const nome = document.querySelector(".nome1");
    const sobrenome = document.querySelector(".nome2");
    const email = document.querySelector(".email");
    const telefone = document.querySelector(".telefone");

    const rua = document.querySelector('[name="rua"]');
    const cidade = document.querySelector('[name="cidade"]');
    const estado = document.querySelector('[name="estado"]');
    const cep = document.querySelector('[name="cep"]');

    const vaga = document.querySelector('[name="vaga"]');
    const data = document.querySelector('[name="data_inicio"]');
    const situacao = document.querySelector('input[name="situacao"]:checked');

    const curriculo = document.querySelector('[name="curriculo"]');

    // ===== VALIDAÇÕES =====
    // Nome
    if (nome.value.trim() === "") {
        erro(nome, "Digite seu nome");
        valido = false;
    } else sucesso(nome);

    if (sobrenome.value.trim() === "") {
        erro(sobrenome, "Digite seu sobrenome");
        valido = false;
    } else sucesso(sobrenome);

    // Email
    if (!validarEmail(email.value)) {
        erro(email, "Digite um email válido");
        valido = false;
    } else sucesso(email);

    // Telefone
    if (telefone.value.trim().length < 10) {
        erro(telefone, "Telefone inválido");
        valido = false;
    } else sucesso(telefone);

    // Endereço
    if (rua.value.trim() === "") {
        erro(rua, "Digite sua rua");
        valido = false;
    } else sucesso(rua);

    if (cidade.value.trim() === "") {
        erro(cidade, "Digite sua cidade");
        valido = false;
    } else sucesso(cidade);

    if (estado.value.trim() === "") {
        erro(estado, "Digite seu estado");
        valido = false;
    } else sucesso(estado);

    if (cep.value.trim().length < 8) {
        erro(cep, "CEP inválido");
        valido = false;
    } else sucesso(cep);

    // Vaga
    if (vaga.value.trim() === "") {
        erro(vaga, "Digite a vaga desejada");
        valido = false;
    } else sucesso(vaga);

    // Data
    if (data.value === "") {
        erro(data, "Selecione uma data");
        valido = false;
    } else sucesso(data);

    // Situação
    if (!situacao) {
        mostrarMensagem("Selecione sua situação profissional", "erro");
        valido = false;
    }

    // Currículo
    if (curriculo.files.length === 0) {
        erro(curriculo, "Envie seu currículo");
        valido = false;
    } else sucesso(curriculo);

    // ===== RESULTADO FINAL =====
    if (valido) {
        mostrarMensagem("Formulário enviado com sucesso 🚀", "sucesso");
        form.reset();
    }
});
// ===== FUNÇÕES =====

function erro(input, mensagem) {
    input.classList.add("input-erro");
    input.classList.remove("input-sucesso");

    const msg = document.createElement("small");
    msg.classList.add("erro-msg");
    msg.style.color = "#ef4444";
    msg.textContent = mensagem;

    input.parentElement.appendChild(msg);
}

function sucesso(input) {
    input.classList.remove("input-erro");
    input.classList.add("input-sucesso");
}

function limparErros() {
    document.querySelectorAll(".erro-msg").forEach(e => e.remove());

    document.querySelectorAll("input").forEach(i => {
        i.classList.remove("input-erro", "input-sucesso");
    });
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarMensagem(texto, tipo) {
    const msg = document.createElement("div");

    msg.textContent = texto;
    msg.style.marginTop = "15px";
    msg.style.padding = "10px";
    msg.style.borderRadius = "6px";
    msg.style.textAlign = "center";
    msg.style.fontWeight = "bold";

    if (tipo === "sucesso") {
        msg.style.background = "#22c55e";
    } else {
        msg.style.background = "#ef4444";
    }

    form.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 3000);
}