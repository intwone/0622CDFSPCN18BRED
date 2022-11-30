# crud-example-m03-pronto
O objetivo desta aula é demonstrar de forma básica como funciona um CRUD utilizando o express e métodos HTTP.

## Atividade 1: Criando um servidor com express
Nesta atividade iremos criar um seridor utilizando o framework do express.

-  [x] Criar um projeto node com o nome: **exemplo-crud**
-  [x] Executar o comando para criar o package.json:
```bash
npm init -y
```
- [ ] Instalar o express 
```bash
npm i express
```
- [ ] Dentro do arquivo app.js que está na raiz do diretório, importar o express
- [ ] O servidor deve rodar na porta **3000**
- [ ] Criar as seguintes rotas que deve retornar um texto

| Rota      | Tipo       | Resposta                            |
| :---------| :--------- | :---------------------------------- |
| `/`       | `GET`      | `Página inicial`                    |
| `/contato`| `GET`      | `Página de Contato`                 | 
| `/login`  | `GET`      | `Página de login`                   |
| `Desafio` | `GET`      | `Ops.. Página não encontrada`       |

#

## Atividade 2: Retornando arquivos.
- [ ] Na raiz do diretório, criar uma pasta chamada views e dentro dela colocar os arquivos que serão enviados no canal ``#material-aula`` no **Slack**
- [ ] Criar as seguintes rotas, sendo que cada rota deve devolver um arquivo .html

| Rota         | Tipo       | Resposta                            |
| :------------| :--------- | :---------------------------------- |
| `/`          | `GET`      | `home.html`                         |
| `/login`     | `GET`      | `login.html`                        | 
| `/cadastro`  | `GET`      | `cadastro.html`                     |
| `Desafio`    |            | `not-found.html`                    |

Dica 2: Criar o arquivo `.gitignore` e adicionar a `node_modules`dentro dela, para que esta pasta não suba para o github

Dica 3: Instale o nodemon para não precisar ficar reiniciando o servidor toda hora.
### Estudos complementares 
[Documentação oficial do Express JS](https://expressjs.com/pt-br/);

#

## Atividade 3: CRUD
O CRUD são operacões que realizamos constantemente no backend, cada letra tem um significado importante, pois elas se referem a uma operação que será realizada no banco de dados que está atrelada a algum método HTTP.

- **C: Create (criar)**, nos permite criar um novo registro para ser salvo no banco de dados, para realizar esta operação, utilizamos o método **POST** do HTTP e geralmente devolvemos o status http 201 (created).

- **R: Read (ler)**, nos permite visualizar os dados que estão salvo no banco de dados, para realizar esta operação, utilizamos o método **GET** do HTTP e geralmente devolvemos o status http 200 (ok).

- **U: Update (atualizar)**, nos permite atualizar um registro que está salvo no banco de dados, para realizar esta operação, utilizamos o método **PUT** do HTTP e geralmente devolvemos o status http 200 (ok).

- **D: Delete (deletar)**, nos permite deletar um registro que está salvo no banco de dados, para realizar esta operação, utilizamos o método **DELETE** do HTTP e geralmente devolvemos o status http 204 (no content).

### Atividade:
- [ ] Instalar o insomnia ou thunder client para testar as requisições.
- [ ] Criar um array de objetos, e deixar 2 usuários cadastrados, cada usuário deve ter as seguintes propriedades:
  - [ ] id
  - [ ] Nome completo
  - [ ] E-mail
  - [ ] Senha
- [ ] Utitlize as boas práticas para salvar os dados do nosso "banco de dados"
- [ ] Criar as seguintes rotas, sendo que cada rota é responsável por realizar uma operação do CRUD e deve retornar um json.

| Rota             | Tipo       | Operação     | Resposta                                                               |                       
| :----------------| :--------- | :------------| :----------------------------------------------------------------------|
| `/usuarios`      | `GET`      | Read         | Devolver a lista com todos os usuários cadastrados                     |    
| `/usuarios/:id`  | `GET`      | Read         | Devolver os dados do usuário em que o id foi solicitado como parâmetro |          
| `/usuarios`      | `POST`     | Create       | Criar um novo usuário e devolver os dados do novo usuário criado       |          
| `/usuarios/:id`  | `PUT`      | Update       | Atualizar os dados do usuário em que o id foi passado como parâmetro e devolver os dados atualizados |                                                                    |
| `/usuarios/:id`  | `DELETE`   | Delete       | Deletar os dados do usuário em que o id foi passado como parâmetro                                                                       |


### Criar a rota de usuários

A rota que deve ser criada é:
    /usuarios
E deve retornar o array com os dados dos usuarios.