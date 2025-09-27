# API-REST de Tarefas 
Este é um projeto de recuperação para a disciplina de Desenvolvimento Web, que consiste em uma **API REST simples** para gerenciar uma lista de tarefas. A API foi desenvolvida em **Node.js** com o framework **Express** e armazena os dados em memória.

# Funcionalidades da API
A API implementa as quatro operações básicas do **CRUD** (Create, Read, Update, Delete) para gerenciar as tarefas. A comunicação entre o cliente (Postman) e o servidor é feita via **JSON**.

# Pré-requisitos
Para rodar este projeto localmente, você precisa ter o **Node.js** instalado em sua máquina.

# Como Instalar e Rodar
1  Clone o repositório ou baixe o projeto para o seu computador.
2  Abra o terminal na pasta raiz do projeto.
3  Instale as dependências usando o npm:
4  primeiro entre na pasta no prórpio terminal usando os comandos:

    **cd rec**(entrar na pasta)
  
    **npm install**
   
5.  Inicie o servidor de desenvolvimento com o Nodemon:
  
   **npm run dev**
 
   aparecerá uma mensagem como onde o servidor será iniciado na porta 3000.                          (http://localhost:3000) o navegar vai conter uma mensagem intuitiva para acessar testar os        métodos no Postman acessando o http://localhost:3000/tasks(só foi adicionado o /tasks no final)

## Rotas da API
 Método  Rota                Descrição                        
                      
 **GET**  `/tasks`            Lista todas as tarefas.          
 **POST**  `/tasks`            Cria uma nova tarefa.            
 **PUT**  `/tasks/:id`        Atualiza uma tarefa por ID.      
 **DELETE**  `/tasks/:id`      Exclui uma tarefa por ID.        

# Exemplo de JSON
Para as requisições **POST** e **PUT**, o corpo da requisição deve ser enviado em formato JSON.

**Exemplo para POST (criar uma tarefa):**
{
  "title": "Estudar para a prova"
}
entre na pasta **prints** para ver os exemplos
