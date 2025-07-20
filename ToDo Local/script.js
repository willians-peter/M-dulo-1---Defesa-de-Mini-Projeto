function atualizarDataHora() {
  const agora = new Date();
  const opcoesHora = { hour: '2-digit', minute: '2-digit', hour12: false };
  const diaDaSemana = agora.toLocaleDateString('pt-BR', { weekday: 'long' });
  const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoesHora);
  const diaDaSemanaMaiuscula = `${diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1)}`;
  document.getElementById("data-hora").innerText = `${diaDaSemanaMaiuscula} ${horaFormatada}`;
}

setInterval(atualizarDataHora, 1000); // atualiza a cada segundo
atualizarDataHora(); // chama a função uma vez para inicializar a data e hora

// Chama a função imediatamente para exibir a data e hora iniciais
atualizarDataHora();

// Atualiza a data e hora a cada segundo (1000 milissegundos)
setInterval(atualizarDataHora, 1000);
// --- Funções para calcular os valores de Delta com base na Vazão Atual ---

const mensagemElement = document.getElementById("saudacao");
const dataHoraElement = document.getElementById("data-hora");

function mostrarMensagem() {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();

  let mensagem = "";
  if (hora < 12) {
    mensagem = "Bom dia!";
  } else if (hora < 18) {
    mensagem = "Boa tarde!";
  } else {
    mensagem = "Boa noite!";
  }

  mensagemElement.innerText = mensagem;
  dataHoraElement.innerText = `Data: ${dataAtual.toLocaleDateString()} Hora: ${dataAtual.toLocaleTimeString()}`;
}

mostrarMensagem();
setInterval(mostrarMensagem, 1000 * 60); // atualiza a cada minuto

class Tarefa {
  constructor(id, titulo, tarefa) {
    this.id=id;
    this.titulo = titulo;
    this.tarefa = tarefa;
  }

  listarTarefas() {
  return `${this.titulo}: Tarefa registrada: ${this.tarefa}`;
  }
}

let dados = JSON.parse(localStorage.getItem("tarefas")) || [];
let idCounter = dados.length > 0 ?
Math.max(...dados.map(tarefa => tarefa.id)) +1: 1;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("listaTarefas");
  const container = document.getElementById("tarefas");

  const criarCard = (tarefa) => {
  const card = document.createElement("li");
  const texto = document.createTextNode(tarefa.listarTarefas());
  const botao = document.createElement("button");
    console.log("Tarefas atualizadas:");
    console.log(dados);
  botao.textContent = "Excluir";
  botao.onclick = () => {
    // lógica para excluir a tarefa
    console.log(`Tarefa ${tarefa.id} excluída`);
  
  dados = dados.filter((t) => t.id !== tarefa.id);
    localStorage.setItem("tarefas", JSON.stringify(dados));
    card.remove();
    console.log("Tarefas atualizadas:");
    console.log(dados);
  };
  card.appendChild(document.createTextNode(" "));
  card.appendChild(botao);
  container.appendChild(card);
  card.appendChild(texto);
  card.appendChild(document.createElement("br"));
  card.appendChild(botao);
  container.appendChild(card);
};
const campoBusca = document.getElementById("localizar");

campoBusca.addEventListener("input", () => {
  const textoBusca = campoBusca.value.toLowerCase();
  const tarefasFiltradas = dados.filter((tarefa) => {
    return (
      tarefa.titulo.toLowerCase().includes(textoBusca) ||
      tarefa.tarefa.toLowerCase().includes(textoBusca)
    );
  });
  container.innerHTML = "";
  tarefasFiltradas.forEach((tarefa) => {
    const novaTarefa = new Tarefa(tarefa.id, tarefa.titulo, tarefa.tarefa);
    criarCard(novaTarefa);
  });
});
  dados.forEach((tarefa) => {
    const novaTarefa = new Tarefa(tarefa.id, tarefa.titulo, tarefa.tarefa);
    criarCard(novaTarefa);
    if (novaTarefa.id >= idCounter) {
      idCounter = novaTarefa.id +1;
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value.trim();
    const tarefa = document.getElementById("tarefa").value.trim();
    
    const novaTarefa = new Tarefa(idCounter,titulo, tarefa);
    
    dados.push({ id: novaTarefa.id, titulo: 
      novaTarefa.titulo, tarefa: novaTarefa.tarefa });
    localStorage.setItem("tarefas", JSON.stringify(dados));
    criarCard(novaTarefa);
    idCounter++;
    form.reset();
  });
});
