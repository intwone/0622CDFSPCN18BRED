const filmes = require('./database/filmes.json');

console.table(filmes);


/* function adicionarFime() {

} */

//const adicionarFilme = function() {}

const adicionarFilme = (titulo, duracao, atores, anoDeLancamento) => {
    //id: filmes[filmes.length -1].id + 1
    const novoFilme = {
        id: filmes.at(-1).id + 1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz: true
    };

    return filmes.push(novoFilme);
}

adicionarFilme("Dh Teste", 3, ["Cassio", "Mario", "Wendel"], 2022);

console.log("Filme adicionado com sucesso");
console.table(filmes)

adicionarFilme("Teste", 4, ["Ator1"], 2023);
console.table(filmes)