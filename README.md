# 🍔 Cardápio Digital - API REST com Spring Boot
# ACESSE PELO BRANCH MASTER
![Java](https://img.shields.io/badge/Java-21-red)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0-brightgreen)
![H2 Database](https://img.shields.io/badge/Database-H2-blue)
![React](https://img.shields.io/badge/React-18-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff)

---

## 📋 Sobre o Projeto

API REST desenvolvida para um **Cardápio Digital** de restaurante. O projeto foi construído com Spring Boot no backend e React + TypeScript no frontend, com Vite para build.

A aplicação realiza operações **CRUD** (Create, Read, Update, Delete) em um banco de dados H2, com interface moderna e responsiva.

---

## 🚀 Funcionalidades

### Backend (Spring Boot)
- ✅ **Listar todos os itens** - GET `/foods`
- ✅ **Buscar item por ID** - GET `/foods/{id}`
- ✅ **Criar novo item** - POST `/foods`
- ✅ **Atualizar item** - PUT `/foods/{id}`
- ✅ **Deletar item** - DELETE `/foods/{id}`

### Frontend (React + TypeScript)
- ✅ **Listagem de pratos** - Grid responsivo com cards
- ✅ **Modal de cadastro** - Formulário com validação

---

## 🛠️ Tecnologias Utilizadas

### Backend
| Tecnologia | Função |
|------------|--------|
| **Java 21** | Linguagem principal |
| **Spring Boot 3** | Framework para criação da API |
| **Spring Data JPA** | Mapeamento objeto-relacional |
| **Hibernate** | ORM para persistência |
| **H2 Database** | Banco de dados em memória |
| **Maven** | Gerenciamento de dependências |
| **Lombok** | Redução de boilerplate |

### Frontend
| Tecnologia | Função |
|------------|--------|
| **React 18** | Biblioteca para interface |
| **TypeScript** | Tipagem estática |
| **Vite** | Build tool e dev server |
| **React Query** | Gerenciamento de estado assíncrono |
| **CSS Modules** | Estilização componente |
