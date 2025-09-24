const express = require('express');
const app = express();
const port = 3000;

// Middleware para analisar requisições com corpo JSON//

app.use(express.json());

// usei Array para armazenar as tarefas na memória//
let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
  res.send('<h1>API de tarefas. Acesse /tasks para começar.</h1>');
});

// GET /tasks: LISTA TODAS AS TAREFAS//
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks: CRIA UMA NOVA TAREFA//
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'O título da tarefa é obrigatório.' });
  }

  const newTask = {
    id: nextId++,
    title: title,
    completed: false // Define o status inicial como não concluído
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT /tasks/:id:ATUALIZA UMA TAREFA EXISTENTE//
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;
  
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  // ATUALIZA apenas os campos que foram enviados na requisição//
  if (title !== undefined) {
    task.title = title;
  }
  if (completed !== undefined) {
    task.completed = completed;
  }

  res.json(task);
});

// DELETE /tasks/:id: EXCLUI UMA TAREFA//
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const initialLength = tasks.length;
  tasks = tasks.filter(t => t.id !== taskId);

  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Tarefa não encontrada.' });
  }

  res.status(204).end(); // Resposta de sucesso sem conteúdo
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});