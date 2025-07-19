class Tarefa {
  constructor(titulo, tarefa) {
    this.titulo = titulo;
    this.tarefa = tarefa;
  }

  listarTarefas() {
    return `${this.titulo}Tarefa registrada: ${this.tarefa}.`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("listaTarefas");
  const container = document.getElementById("tarefas");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value.trim();
    const tarefa = document.getElementById("tarefa").value.trim();
    const novaTarefa = new Tarefa(titulo, tarefa);
    criarCard(novaTarefa);
    form.reset();
  });

  const criarCard = (tarefa) => {
    const card = document.createElement("ul");
    card.textContent = tarefa.listarTarefas();
    container.appendChild(card);
  };
});