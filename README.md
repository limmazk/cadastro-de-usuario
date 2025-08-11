# Sistema de Cadastro de Usuários

Sistema completo de cadastro de usuários com frontend React e backend Node.js, utilizando MongoDB como banco de dados.

## Funcionalidades

- ✅ Cadastro de novos usuários
- ✅ Listagem de usuários cadastrados
- ✅ Exclusão de usuários
- ✅ Interface responsiva e amigável

## Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web para Node.js
- **Prisma** - ORM para banco de dados
- **MongoDB** - Banco de dados NoSQL
- **CORS** - Middleware para controle de origem cruzada

### Frontend
- **React** - Biblioteca JavaScript para UI
- **Axios** - Cliente HTTP para requisições
- **CSS** - Estilização da interface


### Pré-requisitos
- Node.js (versão 16 ou superior)
- MongoDB (local ou MongoDB Atlas)

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
