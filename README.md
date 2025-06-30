# ☕ Mozart Coffee – API de Gerenciamento de Pedidos

## 👤 Autor
**Antony Goes**  
Curso de Ciência da Computação – UTFPR

---

## 📄 Descrição do Projeto

A **Mozart Coffee API** é uma aplicação desenvolvida para gerenciar pedidos em um ambiente de cafeteria, permitindo operações como cadastro de usuários, autenticação, criação e gestão de pedidos, além de controle de acesso com níveis de permissão. A API foi construída com NestJS, Prisma ORM e banco de dados MySQL, com deploy em ambiente de produção via Render.

---

## 🌐 Link para a API em Produção

🔗 [https://mozart-coffe.onrender.com](https://mozart-coffe.onrender.com)  
📚 Swagger (em produção): [https://mozart-coffe.onrender.com/api](https://mozart-coffe.onrender.com/api)

---

## ⚙️ Instruções de Execução

### ✅ Pré-requisitos

- **Node.js**: `^18.x`  
- **NPM**: `^9.x`  
- **Banco de dados**: MySQL  
- **Prisma**: CLI embutido ou instalado globalmente

### 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/tnygo/api-pedidos-restaurante.git
cd api-pedidos-restaurante
npm install
```

### ⚙️ Configuração do Banco de Dados

1. Crie um banco de dados MySQL com o nome `nestdb`.
2. Copie o arquivo `.env.example` para `.env` e configure a variável `DATABASE_URL`:

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/nestdb"
JWT_SECRET="seu_token_secreto"
```

3. Rode as migrações do Prisma:

```bash
npx prisma migrate dev
```

4. Gere o client do Prisma:

```bash
npx prisma generate
```

---

### 🚀 Execução local

Para rodar a API em modo de desenvolvimento:

```bash
npm run start:dev
```

Acesse a aplicação em:  
🔗 [http://localhost:3000](http://localhost:3000)  
📚 Swagger local: [http://localhost:3000/api](http://localhost:3000/api)

---

## 🗂️ Variáveis de Ambiente

Exemplo de `.env`:

```env
PORT=3000
DATABASE_URL="mysql://usuario:senha@localhost:3306/nestdb"
```

---

## 🧭 Diagrama de Entidade-Relacionamento (ERD)

📌 ![ERD](./docs/diagrama-erd.png) *(adicione a imagem na pasta `docs/` com esse nome)*  
Ou acesse:  
🔗 
![ERD_User_Pedido](https://github.com/user-attachments/assets/a7a61e98-e8a1-4f4f-bd45-ef104466648c)

---

## 📚 Documentação Swagger

- **Produção**: [https://mozart-coffe.onrender.com/api](https://mozart-coffe.onrender.com/api)  
- **Local**: [http://localhost:3000/api](http://localhost:3000/api)

---

## ✅ Checklist de Funcionalidades

| Funcionalidade                                          | Status     |
|---------------------------------------------------------|------------|
| Estrutura modular com NestJS                            | ✅ Concluído |
| Controllers e Services separados por domínio            | ✅ Concluído |
| Conexão com banco MySQL via Prisma                      | ✅ Concluído |
| Migrações de banco com Prisma                           | ✅ Concluído |
| CRUD completo de pedidos e usuários                     | ✅ Concluído |
| Autenticação com JWT                                    | ✅ Concluído |
| Autorização por roles com Guards                        | ✅ Concluído |
| DTOs com validação (class-validator)                    | ✅ Concluído |
| Pipes de validação globais                              | ✅ Concluído |
| Middleware e Interceptadores                            | ✅ Concluído |
| Testes com Jest                                         | ✅ Concluído |
| Documentação com Swagger                                | ✅ Concluído |
| Deploy no Render                                        | ✅ Concluído |
| Versionamento de rotas com URI                          | ✅ Concluído |

---

## 📂 Licença

Este projeto foi desenvolvido para fins acadêmicos e não possui fins comerciais.
