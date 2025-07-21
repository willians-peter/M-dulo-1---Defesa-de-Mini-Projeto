_____________________________________________________________________________________________________________________________________________________________________________________________

Mini-Projeto Avaliativo
Descrição:
Instrução geral:
Crie uma aplicação simples em HTML, CSS e JavaScript chamada "ToDo Local", que permita ao usuário adicionar, visualizar e excluir tarefas. Os dados devem ser armazenados usando localStorage. Siga os exercícios abaixo para construir o projeto.
Pontos importantes:
Organizar o projeto com arquivos separados: index.html, style.css, script.js
Versionar o projeto usando GitHub Desktop
Criar repositório
Pelo menos 1 commits por exercício. Exemplo:feat: adicionar tarefa, feat: salvar no localStorage, etc.
Push para o GitHub
Opcional: Criar README.md explicando como funciona o projeto
_____________________________________________________________________________________________________________________________________________________________________________________________
_____________________________________________________________________________________________________________________________________________________________________________________________

Sobre o Gerenciador de Tarefas

O gerenciador de tarefas é uma aplicação que permite criar, editar e excluir tarefas. Abaixo, está uma descrição detalhada de como funciona.

Funcionamento

A classe Tarefa é definida com id, título e tarefa. O método "listarTarefas" retorna uma string formatada com o título e a tarefa, sem exibir o id da tarefa, que é salvo apenas no armazenamento local.

Inicialização dos Dados

Os dados são inicializados com let dados = JSON.parse(localStorage.getItem("tarefas")) || []; que busca a chave "tarefas" e retorna um array de strings. O contador de IDs é iniciado com let idCounter, que busca no array se há dados e define o idCounter como o maior id + 1, ou 1 se não houver dados.

Função para Criar os Cards de Tarefa

A estrutura é iniciada ao documento HTML, que é acionado quando o conteúdo do documento é completamente carregado. O evento "DOMContentLoaded" é usado para executar o JavaScript apenas após o carregamento completo. A função criarCard é definida para criar os cards de tarefa.

Eventos

O botão de excluir tem um evento de clique que remove a tarefa do array de dados, atualiza o armazenamento local e remove o card da tarefa. O método filter é usado para gerar um novo array que compara o id da tarefa a ser removida.

Evento de Busca

O campo de busca é usado para filtrar as tarefas. O método getElementById("localizar") é usado para selecionar o campo de busca, e o evento input é usado para escutar as alterações no campo. A função textoBusca é definida para converter o texto para letras minúsculas e filtrar as tarefas que correspondem ao texto.

Inicialização dos Dados e Adição de Eventos

Os eventos são adicionados ao formulário, selecionando o formulário e o container de tarefas. Os cards de tarefas são adicionados à lista com dados.forEach, criando uma nova instância de Tarefa e chamando criarCard. O evento submit é adicionado ao formulário para criar uma nova tarefa e adicioná-la ao array de dados.

Fiz a inclusão de um relogio e saudação, reaproveitando um codigo que ja estava pronto de outro projeto.