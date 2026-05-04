const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

const candidato = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("contato").value,
    endereco: document.getElementById("endereco").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    cep: document.getElementById("cep").value,
    pais: document.getElementById("pais").value,
    vaga: document.getElementById("concorrendo").value,
    dataDisponivel: document.getElementById("data").value,
    situacao: document.querySelector('input[name="situacao"]:checked')?.value || "",
    notas: document.getElementById("notas").value,
    dataCadastro: new Date().toLocaleString()
  };

  if (!candidato.nome || !candidato.email || !candidato.telefone) {
    alert("Por favor, preencha os campos obrigatórios!");
    return;
  }

  if (!candidato.situacao) {
    alert("Selecione sua situação profissional.");
    return;
  }


  const lista = JSON.parse(localStorage.getItem("candidatos")) || [];

  
  lista.push(candidato);

  localStorage.setItem("candidatos", JSON.stringify(lista));

  alert("Candidato cadastrado com sucesso! ");

  form.reset();
});