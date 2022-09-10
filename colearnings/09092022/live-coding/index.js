const catalogo = require('./catalogo.json')

function listarTodosOsFilmes() {
  return catalogo
}

// console.log(listarTodosOsFilmes())

function listarFilmesEmCartaz(catalogo) {
  const catalogoFiltrado = []

  for(let i in catalogo) {
    if(catalogo[i].emCartaz === true) {
      catalogoFiltrado.push(catalogo[i])
    }
  }

  return catalogoFiltrado
}

// console.log(listarFilmesEmCartaz(catalogo))

const alterarStatusEmCartaz = (codigo) => {
  for(let i = 0; i < catalogo.length; i++) {
    if(catalogo[i].codigo === codigo) {
      catalogo[i].emCartaz = !catalogo[i].emCartaz
    }
  }

  return catalogo
}

// alterarStatusEmCartaz = function( catalogo, codigo ) {
//   catalogo[ buscarFilme( catalogo, codigo ) ].emCartaz = !catalogo[i].emCartaz;
// },

// console.log(alterarStatusEmCartaz(3))

const novoFilme = {
  codigo: 4,
  titulo: 'Alice no País das Maravilhas',
  duracao: 2,
  atores: ["Ator 1", "Ator 2", "Ator 3"],
  anoDeLancamento: 1993,
  emCartaz: false
}

function adicionarFilme(filme) {
  catalogo.push(filme)
  return `Filme ${filme.titulo} adicionado com sucesso`
}
// adicionarFilme(novoFilme)
// console.log(catalogo)

// Slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function excluirFilme(codigo) {
  for(let i = 0; i < catalogo.length; i++) {
    if(catalogo[i].codigo === codigo) {
      // TO DO
    }
  }
}


