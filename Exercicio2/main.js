class Tarefa {
  constructor(titulo, tarefa) {
    this.titulo = titulo;
    this.tarefa = tarefa;
  }

  listarTarefas() {
    return `${this.titulo}: Tarefa registrada: ${this.tarefa}`;
  }
}

let dados = JSON.parse(localStorage.getItem("tarefas")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("listaTarefas");
  const container = document.getElementById("tarefas");

  const criarCard = (tarefa) => {
    const card = document.createElement("li");
    card.textContent = tarefa.listarTarefas();
    container.appendChild(card);
  };

  dados.forEach((tarefa) => {
    const novaTarefa = new Tarefa(tarefa.titulo, tarefa.tarefa);
    criarCard(novaTarefa);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value.trim();
    const tarefa = document.getElementById("tarefa").value.trim();
    const novaTarefa = new Tarefa(titulo, tarefa);
    dados.push(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(dados));
    criarCard(novaTarefa);
    form.reset();
  });
});