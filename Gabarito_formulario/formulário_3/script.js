const form = document.querySelector("#meuform");

const candidatos = JSON.parse(localStorage.getItem("Candidatos")) || [];

form.addEventListener("submit", function(event){
    event.preventDefault();

    const dados = new FormData(form);

    const candidato = Object.fromEntries(dados.entries());

    candidatos.push(candidato);

    localStorage.setItem("Candidatos", JSON.stringify(candidatos));
    alert("Candidato cadastrado com sucesso");

    form.reset();
});

console.log(candidatos);
console.log(candidatos[0]);
