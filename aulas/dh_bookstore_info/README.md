# livraria-api-0622CDFSPCN18BRED

## Objetivo

Nesta atividade, vamos treinar e relembrar sobre:

-   [ ] Criação de rotas
-   [ ] Retorno de recursos
-   [ ] Modificações na base de dados

### Novidades:

Iremos utilizar migrations e seeders para esta atividade, variáveis de ambiente,além de criar um servidor usando o express-generator.

## Atividade 1 - Criando a estrutura do Projeto e CRUD de Livros

Olá, este projeto já tem uma base de dados em JS pronta e iremos criar uma API e alimentar o nosso banco de dados real com os dados que está nesse arquivo de script.

_Obs: O banco de dados em JS deverá estar salvo na pasta: **/database/old/db.js**_

-   [Ver arquivo](db.js)

O modelo de como deve ser a tabela no banco deverá estar no seguinte caminho: **/database/db.drawio**

-   [Ver arquivo](./db.drawio)

_Será necessário instalar a extensão **drawio** para conseguir visualizar o arquivo_

**_Obs: Para esta atividade, iremos criar somente a tabela e model books_**

### Rotas

Após a conversa com o tech lead, ficou estabelecido que:

O nome do banco de dados será `dh_bookstore`

O endpoint de livros será:

```http
/api/v1/livros
```

Ou seja, teremos que criar um CRUD utilizando como base neste endpoint.

#### Sendo assim, as rotas serão:

Nome do arquivo de rotas: `booksV1`
Nome do arquivo do controller: `BooksController`

**Retorna todos os livros:**

```http
  GET /api/v1/livros
```

_Esse parâmetro sór será necessário implementar, quando criarmos os endpoints de autenticação que será na próxima aula._
| Parâmetro | Tipo | Descrição |
| :---------- | :--------------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#

**Retorna um livro específico**

```http
  GET /api/v1/livros/{id}
```

| Parâmetro | Tipo     | Descrição                                   |
| :-------- | :------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer |

#

**Criar um livro**

```http
  POST /api/v1/livros
```

| Parâmetro      | Tipo     | Descrição                                             |
| :------------- | :------- | :---------------------------------------------------- |
| `title`        | `string` | **Obrigatório**. Título do livro                      |
| `total_pages`  | `number` | **Obrigatório**. Quantidade total de páginas do livro |
| `release_year` | `string` | **Obrigatório**. Ano de lançamento do livro           |
| `stock`        | `number` | **Obrigatório**. Estoque atual do livro               |

**Editar um livro**

```http
  PUT /api/v1/livros/{id}
```

| Parâmetro      | Tipo     | Descrição                                             |
| :------------- | :------- | :---------------------------------------------------- |
| `id`           | `number` | **Obrigatório**. O ID do item que você quer editar    |
| `title`        | `string` | **Obrigatório**. Título do livro                      |
| `total_pages`  | `number` | **Obrigatório**. Quantidade total de páginas do livro |
| `release_year` | `string` | **Obrigatório**. Ano de lançamento do livro           |
| `stock`        | `number` | **Obrigatório**. Estoque atual do livro               |

#

**Deletar um livro**

```http
  DELETE /api/v1/livros/{id}
```

| Parâmetro | Tipo     | Descrição                                       |
| :-------- | :------- | :---------------------------------------------- |
| `id`      | `number` | **Obrigatório**. O ID do item que será deletado |

#

### Observações:

Esteja preparado para retornar uma mensagem de erro caso não seja possível completar a funcionalidade em cada endpoint da API.

Deve ser criada uma documentação dos endpoints no **postman**

## Dicas

Para conseguir resolver este desafio será necessário:

-   [ ] Criar um servidor no formato de API (pode utilizar o express-generator): https://expressjs.com/en/starter/generator.html
-   [ ] Instalar o **nodemon** como dependência de desenvolvimento.
-   [ ] Instalar o Sequelize, Sequelize CLI e o driver do MySQL.
-   [ ] Instalar a lib do **dotenv** para trabalhar com variáveis de ambiente.
-   [ ] Criar o arquivo .sequelizerc e realizar a configuração.
-   [ ] Criar o arquivo .env e criar as variáveis de ambiente.
-   [ ] Criar o banco de dados utilizando o CLI do sequelize
-   [ ] Criar a migration para gerar a tabela de livros
-   [ ] Criar a seeder para popular o banco de dados com os arquivos que temos no "banco de dados JS".
-   [ ] Criar as rotas do endpoint de livros.
-   [ ] Criar os controllers para realizar o CRUD.

## Atividade 2

Nesta atividade iremos consumir uma API de terceiro utilizando o Axios (caso preferir, pode ser utilizado o node-fetch também).
Observe que no DER, teve uma modificação na tabela **books**, foi inserido a coluna **country_code**, ao lado da coluna _stock_.

### Adicionando a coluna

Para adicionar a coluna, será necessário criar uma nova migration para adiciona-la.

**Dica:**: Utiliza o método **addColumn**, caso tiver dúvidas pesquise como utilizar o método addColumn em migrations do sequelize.

Em seguida, cadastre mais 3 livros para ter alguns dados com país populado.

### Instalação do axios.

Após criar a coluna do country_code, iremos instalar o axios para consumir uma API de terceiro.

### Atividade - Consumo API de terceiro

Iremos consumir a API: do Rest Countries, https://restcountries.com/
Vamos consumir o endpoint:

```http
GET https://restcountries.com/alpha/{code}
```

No controller de obter um livro escpefíco, devemos adicionar ao objeto da resposta a url com a foto svg do país e o nome do país.

O retorno deve ficar da seguinte estrutura:

```json
{
	"data": {
		"id": "107",
		"title": "Teste Cadastro POST",
		"total_pages": 200,
		"author": "Wendel Cutrim",
		"release_year": "2023",
		"stock": 106,
		"country_code": "BR",
		"createdAt": "2023-02-23T21:22:07.000Z",
		"updatedAt": "2023-02-23T21:22:07.000Z",
		"country": {
			"name": "Brazil",
			"flag": "https://https://flagcdn.com/br.svg"
		}
	}
}
```

## Atividade 3 - Cadastro de usuários e autenticação.

Nesta atividade iremos criar a tabela e model de usuários e implementar a autenticação utilizando token com JWT.

### Banco de dados

**Para isso será necessário:**

-   [ ] Criar uma migration para criar a tabela de usuários
-   [ ] Criar uma Seeder que popule o banco com o mínimo de 5 usuários.
-   [ ] Criar a Model de usuários.

### Autenticação.

Para seguir o padrão REST as requisições entre cliente e servidor, devem ser _stateless_ e por isso iremos criar um token para identificar os usuários.

Também iremos proteger as rotas de criar, editar e deletar livros, ou seja, nossas rotas públicas serão somente a de criar usuário, login, consultar todos os livros e consultar um livro. As rotas que manipulam os dados do livro, devem ser privadas.

**Para isso será necessário:**

-   [ ] Criar rotas para criar um usuário e autenticação
-   [ ] Criar controller de autenticação
-   [ ] **Lembre-se de criptografar a senha!**
-   [ ] Instalar o JWT
    -   [ ] Documentação JWT: https://jwt.io/
    -   [ ] Instalação do JWT: https://www.npmjs.com/package/jsonwebtoken
-   [ ] Configurar o JWT
-   [ ] Criar middleware para verificar o token
-   [ ] Proteger as rotas de criar, editar e deletar um livro para que somente usuários autenticados possam realizar estas operações
