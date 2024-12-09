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
- Adicionar novas reservas.
- Listar todas as reservas.
- Visualizar detalhes de uma reserva específica.
- Atualizar informações de uma reserva.
- Remover reservas existentes.

---

## *Tecnologias Utilizadas*
- *Node.js*
- *Express.js*
- *MongoDB* (via Mongoose)
- *TypeScript*
- *dotenv*
- *Cors*

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
   

2. Inicie o servidor:
   bash
   npm run start-dev
   

---

## *Endpoints*

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

## *Estrutura do Projeto*

|-- src
|   |-- controllers
|   |   |-- apiController.ts
|   |-- database
|   |   |-- mongo.ts
|   |-- model
|   |   |-- Agenda.ts
|   |-- routes
|   |   |-- api.ts
|   |-- public
|   |-- server.ts
|-- .env
|-- package.json
|-- tsconfig.json


---

## *Licença*
Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar conforme necessário. 