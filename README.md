<img width="1858" height="924" alt="image" src="https://github.com/user-attachments/assets/ce924f21-79ff-49bc-b886-9dffc73bba38" /># Sistema de Cadastro de Usuários

Sistema completo de cadastro de usuários com frontend React e backend Node.js, utilizando MongoDB como banco de dados.

## Funcionalidades

- ✅ Cadastro de novos usuários
- ✅ Listagem de usuários cadastrados
- ✅ Exclusão de usuários
- ✅ Interface responsiva e amigável

## Tecnologias Utilizadas

### Backend
- <img align="center" alt="Arthur-Node" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />  **Node.js** 
- <img align="center" alt="Arthur-Express" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" /> **Express** 
- <img align="center" alt="Arthur-Prisma" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" /> **Prisma** 
- <img align="center" alt="Arthur-MongoDB" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" /> **MongoDB**

### Frontend
- <img align="center" alt="Arthur-React" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /> **React**  
- <img align="center" alt="Arthur-Axios" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain-wordmark.svg" /> **Axios** 
- <img align="center" alt="Arthur-Css" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" /> **CSS** 


### Pré-requisitos
- <img align="center" alt="Arthur-Node" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /> Node.js (versão 16 ou superior) 
- <img align="center" alt="Arthur-MongoDB" height="30" width="40"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" /> MongoDB (local ou MongoDB Atlas) 

### Backend

1. Navegue para a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na pasta backend
   - Adicione a URL do MongoDB:
```env
DATABASE_URL="sua_url_do_mongodb"
```

4. Gere o cliente Prisma:
```bash
npx prisma generate
```

5. Execute o servidor:
```bash
node server.js
```

O servidor estará rodando em `http://localhost:3000`

### Frontend

1. Navegue para a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

## 🔗 Endpoints da API

### Usuários

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/usuarios` | Lista todos os usuários |
| POST | `/usuarios` | Cria um novo usuário |
| PUT | `/usuarios/:id` | Atualiza um usuário |
| DELETE | `/usuarios/:id` | Remove um usuário |

### Exemplo de dados:
```json
{
  "name": "João Silva",
  "age": "25",
  "email": "joao@email.com"
}
```

## 🎯 Como Usar

1. Inicie o backend e o frontend conforme as instruções acima
2. Acesse `http://localhost:5173` no seu navegador
3. Preencha o formulário com nome, idade e email
4. Clique em "Cadastrar" para adicionar um novo usuário
5. Use o ícone de lixeira para excluir usuários da lista

## 📝 Observações

- O backend está configurado para aceitar requisições de qualquer origem (CORS aberto)
- Para projetos em produção, configure o CORS adequadamente
- Existe um bug no endpoint PUT (`uptade` deveria ser `update`)
- O sistema não possui validações robustas no backend

- ## 👨‍💻 Autor

Desenvolvido como projeto de estudo em React e Backend.

## Contato:

<a href="https://www.linkedin.com/in/arthur-lima-027581326/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
