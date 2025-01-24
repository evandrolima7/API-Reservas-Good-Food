# Projeto: API de Reserva de Clientes

Este projeto é uma API RESTful para gerenciamento de reservas de clientes. Desenvolvido com Node.js, Express, e MongoDB, permite criar, visualizar, atualizar e deletar reservas de maneira eficiente.

---

## *Tabela de Conteúdos*
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Endpoints](#endpoints)
- [Modelo de Dados](#modelo-de-dados)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Licença](#licença)

---

## *Funcionalidades*
- Autenticação de Usuários: Registro e login de usuários com autenticação via JWT.
- Adicionar novas reservas.
- Listar todas as reservas.
- Visualizar detalhes de uma reserva específica.
- Atualizar informações de uma reserva.
- Remover reservas existentes.
- Lista de e-mails dos usuários.

---

## *Tecnologias Utilizadas*
- *Node.js*
- *Express.js*
- *MongoDB* (via Mongoose)
- *TypeScript*
- *dotenv*
- *Cors*
- Passport.js (para autenticação)
- JWT (JSON Web Token)
- Bcryptjs (para criptografia de senha)

---

## *Pré-requisitos*
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- Node.js (versão 18 ou superior)
- npm ou yarn
- MongoDB configurado

---

## *Instalação*

1. Clone o repositório:
   bash
   git clone https://github.com/evandrolima7/API---Agenda-Reservas-Good-Food

2. Acesse a pasta do projeto:
   bash
   cd repositorio
   

3. Instale as dependências:
   bash
   npm install
   

---

## *Configuração*

1. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
   env
   PORT=5000
   MONGO_URL=mongodb://localhost:27017/reserves
   JWT_SECRET_KEY=sua-chave-secreta
   

2. Inicie o servidor:
   bash
   npm run start-dev
   

---

## *Endpoints*

### *POST /register*
Registra um novo usuário e gera um token JWT.

#### Corpo da Requisição:
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
#### Exemplo de Resposta:
{
  "id": "60d7b28f9b1e8d5b6e44c8b2",
  "token": "seu-token-jwt-aqui"
}

### *POST /login*
Faz login de um usuário e gera um token JWT.

#### Corpo da Requisição:
{
  "email": "joao@email.com",
  "password": "senha123"
}
#### Exemplo de Resposta:
{
  "status": true,
  "token": "seu-token-jwt-aqui"
}

### *GET /reserva*
Lista todas as reservas.
#### Exemplo de Resposta:
json
{
  "reservations": [
    {
      "_id": "640d6c8c9d9f1b1a12345678",
      "name": "João Silva",
      "phone": "(11) 98765-4321",
      "dateReserve": "2024-12-10",
      "timeReserve": "20:00",
      "quantity": 4,
      "observations": "Mesa no canto"
    }
  ]
}


### *GET /reserva/:id*
Retorna uma reserva específica pelo ID.
#### Exemplo de Resposta:
json
{
  "reservations": {
    "_id": "640d6c8c9d9f1b1a12345678",
    "name": "João Silva",
    "phone": "(11) 98765-4321",
    "dateReserve": "2024-12-10",
    "timeReserve": "20:00",
    "quantity": 4,
    "observations": "Mesa no canto"
  }
}


### *POST /reserva*
Adiciona uma nova reserva.
#### Corpo da Requisição:
json
{
  "name": "João Silva",
  "phone": "(11) 98765-4321",
  "dateReserve": "2024-12-10",
  "timeReserve": "20:00",
  "quantity": 4,
  "observations": "Mesa no canto"
}

#### Exemplo de Resposta:
json
{
  "newReserve": {
    "_id": "640d6c8c9d9f1b1a12345678",
    "name": "João Silva",
    "phone": "(11) 98765-4321",
    "dateReserve": "2024-12-10",
    "timeReserve": "20:00",
    "quantity": 4,
    "observations": "Mesa no canto"
  }
}


### *PUT /reserva/:id*
Atualiza uma reserva específica pelo ID.
#### Corpo da Requisição (exemplo):
json
{
  "name": "Maria Silva",
  "quantity": 5
}

#### Exemplo de Resposta:
json
{
  "client": {
    "_id": "640d6c8c9d9f1b1a12345678",
    "name": "Maria Silva",
    "phone": "(11) 98765-4321",
    "dateReserve": "2024-12-10",
    "timeReserve": "20:00",
    "quantity": 5,
    "observations": "Mesa no canto"
  }
}


### *DELETE /reserva/:id*
Remove uma reserva pelo ID.
#### Exemplo de Resposta:
json
{}

### *GET /list*
Lista os e-mails dos usuários registrados (rota protegida por autenticação JWT).
#### Exemplo de Resposta:
{
  "list": ["usuario1@email.com", "usuario2@email.com"]
}


---

## *Modelo de Dados*
O modelo de dados para reservas segue o seguinte esquema:
typescript
type userType = {
  name: string;
  phone: string;
  dateReserve: string;
  timeReserve: string;
  quantity: number;
  observations?: string;
};

---

## *Licença*
Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar conforme necessário. 