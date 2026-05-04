let tarefas = [];
let filtroAtual = "todas";

// primeira função
function adicionar(){
    let input = document.getElementById("input-tarefa");
    let texto = input.value.trim();

    // texte logico simples, que se o texto foi igual a vazio, não é permitido a entrada de dados, entao retorna
    if (texto === "") {
        return;
    }

    // armazenamento em um objeto
    let novaTarefa = {
        tarefa: texto,
        concluida: false,
    }

    // puxando as tarefas
    tarefas.push(novaTarefa);
    // defindo que apos puxar a tarefa, a barra de escrever ficara limpa
    input.value = "";

    // let lista = document.getElementById("lista");
    // lista.innerHTML += `<li>${texto}</li>`
    // console.log(tarefas)

    renderizar();
}

function renderizar() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((chave, index)=>{

        if(filtroAtual === "pendentes" && chave.concluida) return;
        if(filtroAtual === "concluidas" && !chave.concluida) return;

        let li = document.createElement("li");

        let marcado = ""
        if (chave.concluida) {
            marcado = "checked"
            li.classList.add("concluida");
        }

        li.innerHTML = 
        "<input type='checkbox' "+ marcado +" onclick='concluir("+ index +")'>" +
        "<span>" + chave.tarefa + "</span>" + 
        "<button onclick='deletar("+ index +")'>Excluir</button>";
        lista.appendChild(li);
    });

    atualizarContador();

    let vazio = document.getElementById("vazio");
    let visiveis = lista.querySelectorAll("li").length;
    if (visiveis === 0) {
        vazio.style.display = "block";
    } else {
        vazio.style.display = "none";
    }
}

// essa função faz com que o Enter funcione para enviar conteudo para lista
function deletar(index) {
    tarefas.splice(index, 1);
    renderizar()
}

// segunda função
function teclaEnter(event){
    if (event.key === "Enter") {
        adicionar()
    }
}

// terceira função
function filtrar(tipo){
    filtroAtual = tipo;
    document.getElementById("btn-todas").classList.remove("ativo");
    document.getElementById("btn-pendentes").classList.remove("ativo");
    document.getElementById("btn-concluidas").classList.remove("ativo");

    document.getElementById("btn-" + tipo).classList.add("ativo");

    renderizar()
};

function concluir(index) {
    tarefas[index].concluida = !tarefas[index].concluida;
    renderizar();
}

function atualizarContador(params) {
    let pendentes = 0;

    tarefas.forEach((chave)=>{
        if (!chave.concluida) {
            pendentes = pendentes + 1;
        }
    });

    let texto ="";
    if (pendentes === 1) {
        texto = "1 Tarefa pendente ";
    } else {
        texto = pendentes + " Tarefas pendentes ";
    }

    document.getElementById("contador").innerHTML = texto;
}