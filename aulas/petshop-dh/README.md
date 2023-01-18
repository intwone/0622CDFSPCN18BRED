# petshop-dh-fnts18

## Atividades

O nosso cliente tem um petshop e gostaria de criar uma aplicação onde seja possível falar mais sobre a sua empresa e que seja possível cadastrar os pets que estão disponível para adoção e os serviços realizados pelo petshop.

As tecnologias que devem ser utilizadas para este projeto são:

**Front-end**: EJS (HTML, JavaScript), CSS
**Back-end**: Javascript, Express

-   **Arquitetura**: MVC

**_Obs_**: Está liberado usar algum framework CSS caso queira.

#

### **Atividade 01 - Criação do servidor**

Nesta atividade iremos criar o servidor, instalar as principais dependências que iremos utilizar no projeto, e estruturar o projeto na arquitetura MVC.

**Tempo para realizar essa atividade: 5 minutos**

Para atingir esse objetivo será necessário:

-   [x] Iniciar um projeto node
-   [x] Instalar o express
-   [x] Criar a estrutura utilizando o padrão MVC
-   [x] Criar uma pasta chamada **database** e dentro desta pasta criar o arquivo `db.json`
-   [x] Instalar o nodemon como dependência de desenvolvimento
-   [x] Criar scripts para startar a aplicação, deve conter os seguintes scripts:
    -   [x] **start**: A aplicação deve rodar utilizando pelo **_node_**
    -   [x] **dev**: A aplicação deve rodar utilizando o **_nodemon_**
-   [x] Criar o entry point da aplicação com o nome `app.js`, configurar o servidor e criar a rota `/` que quando for solicitada deve enviar a seguinte mensagem (text ou json): **Express Works!**

#

### **Atividade 02 - Criação de rotas, controllers e configurando o template engine**

Nesta atividade iremos criar as rotas do nosso servidor, criar os controllers e configurar o nosso template engine.

**Tempo para realizar essa atividade: 15 minutos**

Para atingir esse objetivo será necessário:

-   [x] Instalar o ejs.
    -   Documentação do ejs: https://ejs.co/
-   [x] Configurar o servidor para trabalhar com o template engine ejs
-   [x] Informar ao servidor aonde está a nossa pasta de views
-   [x] Configurar o servidor para que todas as reqisições seja em JSON
-   [x] Informar ao servidor a pasta de arquivos estáticos (public)
-   [x] Alterar a extensão das views de `.html` para `.ejs`

**Obs: Fique de olho nas importações dos arquivos das views, pois já informarmos para o servidor que ele tem uma pasta de arquivos públicos, ou seja, não precisamos passar o path para ir até ela**

-   [x] Criar a pasta de rotas. Dentro da pasta de rotas criar os arquivos que achar necessários para rotas.
-   [x] Na pasta de rotas criar o arquivo: `home.js` onde deve ter as seguintes rotas:

| Route      | Method | Description                       |
| :--------- | :----- | :-------------------------------- |
| `/`        | GET    | Deve renderizar a view `index`    |
| `sobre`    | GET    | Deve renderizar a view `sobre`    |
| `login`    | GET    | Deve renderizar a view `login`    |
| `contato`  | GET    | Deve renderizar a view `contato`  |
| `servicos` | GET    | Deve renderizar a view `servicos` |

-   [x] Criar o controller para tratar estas rotas

#

### **Atividade 03 - Renderização dinâmica**

Nesta atividade iremos utilizar o poder do ejs para realizar a renderização dinâmica e criar nossos componentes.

**Tempo para realizar essa atividade: 20 minutos**

Para atingir esse objetivo será necessário:

-   [x] Olhe cada view e verifique quais elementos podemos transformar em componentes. Dentro da nossa camada da **View** crie uma pasta chamada `components` e dentro desta pasta, crie os arquivos que você julgar necessário componentizar e insira os componentes nas views que precisam utilizar ele.

    -   **Dica: Componentizar é pouparmos trabalho de repetir o mesmo código em cada view, para isso, identifique os elementos que mais se repetem na página para transforma-lo em um componente.**

-   [x] No arquivo db.json, vamos criar um banco de dados fake para conseguimos renderizar os dados, insira os seguintes dados nele:

```JSON
{
    "services": [{
            "id": 1,
            "name": "Banho e tosa",
            "price": 70.0,
            "description": "O melhor serviço de banho e tosa da cidade!",
            "image": "https://www.revistapetcenter.com.br/wp-content/uploads/2022/07/petcenter-241-anuario-banho-e-tosa-renta%CC%81vel.jpg"
        },
        {
            "id": 2,
            "name": "Vacinação",
            "price": 120,
            "description": "Cuide da saúde do seu pet, coloque a carteira de vacinação do seu pet em dia!",
            "image": "https://www.granvitapet.com.br/sitedata//imgsdt/geral/vacinacao-do-seu-pet.jpg"
        },
        {
            "id": 3,
            "name": "Passeio",
            "price": 50.97,
            "description": "Passeamos com o seu pet. Duração do passeio: 15min",
            "image": "https://cisavet.com.br/arquivos/banco-de-imagens/categoria-1/dicas-para-a-hora-do-passeio-com-o-pet-20180820132255.jpg"
        },
        {
            "id": 4,
            "name": "Cuidar do pet - Diária",
            "price": 80.55,
            "description": "Cuidamos do seu pet no período da 08:00 - 18:00. Neste valor está incluso um passeio com o pet e a alimentação.",
            "image": "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fb066060-85f9-4b46-806e-33083fbbf82b/carinho-cachorro.jpg"
        },
        {
            "id": 5,
            "name": "Consulta veterinária",
            "price": 150.98,
            "description": "Realizamos atendimeto médico ao seu pet com os melhores veterinários da cidade.",
            "image": "https://fresh4pet.com.br/wp-content/uploads/2020/08/foto-blog-24-agosto-1024x756.jpg"
        }

    ],
    "users": [{
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@mail.com",
            "password": "123456",
            "isAdmin": true
        },
        {
            "id": 2,
            "firstName": "Lorem",
            "lastName": "Ipsum",
            "email": "lorem@mail.com",
            "password": "123456",
            "isAdmin": false
        }
    ]
}
```

-   [x] Na camada model, crie o arquivo; `Service.js` neste arquivo deve ficar a lógica para consular o banco de dados
-   [x] Crie o método findAll() que retorne todos os serviços.
    -   [x] Obs: Os dados do banco de dados devem ser mapeados da seguinte maneira:
        -   ```javascript
              {
                  id: ...,
                  nome: ...,
                  preco: R$ ... //Deve estar formatado no padrão brasileiro, para isso pode utilizar o método: toLocaleString(),
                  descricao: ...,
                  imagem: ...
              }
            ```
-   [x] Importar o service no controller `HomeController` e utilizar o método para retornar os serviços.
-   [x] Renderizar os serviços cadastrados no banco de dados na view de serviços.

#

### **Atividade 04 - Crud de serviços**

Nesta atividade iremos criar um crud de serviços

**Tempo para realizar essa atividade: 30 minutos**

Para atingir esse objetivo será necessário:

-   [ ] Criar a view de admin para visualizar todos os serviços cadastrados, o nome da view deve ser:
-   [ ] Criar a view para cadastro de serviços
-   [ ] Criar a view para edição de serviços
-   [ ] Criar o arquivo `admin.js` na pasta de rotas e criar as seguintes rotas:

    -   | Route                        | Method | Param          | Description                                 |
        | :--------------------------- | :----- | :------------- | :------------------------------------------ |
        | `/admin/servicos`            | GET    |                | Deve renderizar a view `index (service)`    |
        | `/admin/servicos/create`     | GET    |                | Deve renderizar a view `cadastro (service)` |
        | `/admin/servicos/create`     | POST   |                |                                             |
        | `/admin/servicos/:id/edit`   | GET    |                | Deve renderizar a view `editar (service)`   |
        | `/admin/servicos/:id/edit`   | PUT    | `id: required` |                                             |
        | `/admin/servicos/:id/delete` | DELETE | `id: required` | Deve renderizar a view `contato`            |
        | `/admin/servicos/:id`        | GET    | `id: required` | Deve renderizar a view `servicos`           |

-   [ ] **Obs**: Lembre-se que para trabalhar com requisições do tipo PATCH, PUT e DELETE, precisamos instalar a biblioteca `method override`
