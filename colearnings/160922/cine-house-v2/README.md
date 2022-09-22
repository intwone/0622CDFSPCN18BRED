# cine-house-dh

## Refatoração do projeto

Neste colearning coletivo iremos realizar a refatoração do projeto utilizando os novos conceitos que aprendemos durante o primeiro módulo do curso como arrow functions e métodos de array.

#

## Atividade 1 - Criação do projeto
- [x] Criar o diretório chamado cine-house-v2
- [x] Abrir o diretório com o VS Code
- [x] Inicializar um projeto node no diretório
- [x] Instalar a biblioteca nodemon

[Documentação nodemon - NPM](https://www.npmjs.com/package/nodemon)

#

## Atividade 2 - Criação do banco de dados e entry point do projeto

- [x] Criar o arquivo chamado `filmes.js`, este arquivo será um módulo onde irá simular o nosso banco de dados, dentro do arquivo deve conter:
  - [x] Um array de objetos onde cada objeto, deve ter as seguintes propriedades:


| Propriedade       | Tipo de Dado      |
| :---------------- | :---------------- |
| `id`              | `number`          |
| `titulo`          | `string`          |
| `duracao`         | `number`          |
| `atores`          | `array de string` |
| `anoDeLancamento` | `number`          |
| `emCartaz`        | `boolean`         |

- [x] Criar o arquivo entry point do projeto com o nome: `app.js`
- [x] Importar o módulo **filmes** para dentro do nosso entry point
- [x] Dentro do entry point, exibir no console a lista de filmes.

#

## Atividade 3 - Transformando o banco de dados para arquivo JSON
- [x] Na raíz do diretório do projeto (cine-house-v2), criar o diretório: **database**
- [x] Dentro do diretório **database** criar o arquivo `filmes.json` e passar para os dados do arquivo `filmes.js` para o formato **json** no novo arquivo criado no diretório database.
- [x] No entry point, alterar o caminho da importação do "banco de dados" para reconhecer o arquivo json
- [x] Se no console do banco de dados aparecer a lista de filmes é porque tudo ocorreu com sucesso.

<details>
    <summary markdown="span">Dica</summary>
    <p>
        É possível realizar de maneira mais rápida utilizando está conversão, lembra quais métodos podemos utilizar para converter um objeto literal javascript para JSON?
        <br>
        Para isso será além de utilizar esses métodos, será necessário utilizar um método nativo do node para trabalhar com arquivos.
    </p>
    <details>
        <summary markdown="span">Métodos que da para utilizar:</summary>
        <ul>
            <li>JSON.stringfy() - Converte objeto literal JS para JSON</li>
            <li>Método nativo do node <strong>FileSystem</strong></li>
        </ul>
    </details>
    <details>
        <summary markdown="span">Código:</summary>
        <code>
        const filmes = require('./filmes');
        <br />
        const fs = require('fs');
        <br />
        const path = require('path');
        <br />
        const filmesJson = JSON.stringfy(filmes, null, 4);
        <br />
        fs.writeFileSync(path.resolve("database", "filmes.json"), filmesJson);
        <br />
        </code>
    </details>
</details>

#

## Atividade 4: Criando funções:

Criar as seguintes funções:
- [x] **adicionarFilme**: Esta função deve adicionar um filme no nosso banco de dados.
- [ ] **buscarFilme**: Esta função deve receber como parâmetro o `id` do filme e retornar os dados do filme.
- [ ] **alterarStatusEmCartaz**: Esta função deve receber como parâmetro o `id` do filme e deve alterar a propriedade `emCartaz` do filme. Ou seja, se o filme está como `true` deve passar a ser `false` e vice-versa.
- [ ] **listarTodosOsFilmes**: Esta função deve listar todos os filmes que estão armazenados no banco de dados.
- [ ] **listarFilmesDeLongaDuracao**: Esta função deve listar todos os filmes que a duração é maior que 2 horas.

#

## Desafio 1
Neste desafio você deve criar uma função que recebe como parâmetro o id do filme e ela deve remover o filme do nosso banco de dados.

<details>
    <summary markdown="span">Dicas</summary>
    <h3>Para resolver este desafio tem 2 maneiras:</h3>
    <ol>
        <li>Utilizando o método filter, porém a importação do banco de dados deve estar como let e não const.</li>
        <li>Caso utilizou const para importar o banco de dados, pode-se utilizar o método <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice">Splice</a><br>Se olhar na este método recebe o indíce como parâmetro, para encontrar o indíce, recomento utilizar o método: <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex">findIndex</a></li>
    </ol>
</details>

#

## Desafio 2
Criar um único arquivo para armazenar as funções, esse arquivo deve ser um módulo a ser exportado.