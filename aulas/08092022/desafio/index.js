const catalogo = require('./database/catalogo.json')

function adicionarFilme({ codigo, titulo, duracao, atores, anoDeLancamento, emCartaz }) {
  const novoFilme = {
    codigo,
    titulo,
    duracao,
    atores,
    anoDeLancamento,
    emCartaz
  }

  catalogo.push(novoFilme)
}

function listarTodosOsFilmes() {
  return catalogo
}

// console.log(listarTodosOsFilmes())

const listarFilmesEmCartaz = () => {
  const catalogoFiltrado = []

  for(let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].emCartaz === true) { // valores trythy e falsy <---
      catalogoFiltrado.push(catalogo[i])
    }
  }

  return catalogoFiltrado
}

// console.log(listarFilmesEmCartaz())

function alterarStatusEmCartaz(codigo) {
  for(let i = 0; i < catalogo.length; i++) {
    if(catalogo[i].codigo === codigo) {
      catalogo[i].emCartaz = !catalogo[i].emCartaz
    }
  }

  return catalogo
}

// console.log(alterarStatusEmCartaz(3))

const filmes = {
  id: 1,
  filme: "test1",
  duracao: 2,
  emCartaz: false
}
function NovoFilme(id, filme,duracao, emCartaz){
  this.id = id
  this.filme = filme
  this.duracao = duracao
  this.emCartaz = emCartaz
}

console.log(new NovoFilme(1, 'test20', 2.30, true))