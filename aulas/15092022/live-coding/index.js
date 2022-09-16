
// map

const minhaListaDeNumeros = [1, 4, 6, 7, 9, 10, 24]

const minhaListaDeNumeroMapeados = minhaListaDeNumeros.map((numero) => numero * 2)

// console.log([1, 4, 6, 7, 9, 10, 24].map((numero) => numero * 2))


// filter

const cestaDeFrutas = ['Abacaxi', 'Uva', 'Laranja', 'Uva', 'Banana', 'Laranja', 'Laranja']

const laranjas = cestaDeFrutas.filter((fruta) => {
  return fruta !== 'Laranja'
})

const numerosPares = minhaListaDeNumeros.filter((numero) => numero % 2 === 0)

const numerosMaioresDoQueOito = minhaListaDeNumeros.filter((numero) => numero > 8)

// console.log(numerosPares)

// Reduce

const array2 = [2, 4, 5, 6, 12, 34, 20]

const soma2 = array2.reduce((valorPrevio, valorCorrente) => {
  return valorPrevio + valorCorrente
}, 10)

// console.log(soma2)

// 1° 
// valorPrevio = 0
// valorCorrente = 2

// valorPrevio = 2

// 2°
// valorPrevio = 2
// valorCorrente = 4

// valorPrevio = 6

// 3° 
// valorPrevio = 6
// valorCorrente = 5


// --------------------

// Destructiring

const arrayDeNomes = ['Mario', 'Wendel', 'Cassio', 'Maria', 'Jose']
const jose = arrayDeNomes[4]

const [primeiroNome, ,terceiroNome, ,ultimoNome] = arrayDeNomes

// console.log(ultimoNome)
// console.log(terceiroNome)

const meuObj = {
  nome: 'Cassio',
  idade: 29,
  endereco: {
    rua: 'Rua tal',
    numero: 9121,
  },
  estaAtivo: true
}

// const { nome, endereco: { rua } } = meuObj
// console.log(nome)
// console.log(estaAtivo)

const { nome } = meuObj
// console.log(nome)

const meuObj2 = [
  {
    nome: 'Cassio',
    idade: 29,
    endereco: {
      rua: 'Rua tal',
      numero: 9121,
    },
    estaAtivo: true
  },
  {
    nome: 'Wendel',
    idade: 29,
    endereco: {
      rua: 'Rua tal',
      numero: 9121,
    },
    estaAtivo: true
  }
]

const [, wendel] = meuObj2
// console.log(wendel)

const { idade } = wendel
// console.log(idade)

// --------------------------

// Spread Operator

const nomes1 = ['CAssio', 'Wendel', 'Mario']
const nomes2 = ['Maria', 'Jose', 'Joao'] 

const uniaoDosArray = [...nomes1, ...nomes2, 19, 'asadhgad', true]
// console.log(uniaoDosArray)

const obj1 = {
  nome: 'Cassio',
  idade: 30
}

const obj2 = {
  cor: 'Azul',
  estaAtivo: true
}

const uniaoDeObj = {...obj1, ...obj2}
// console.log(uniaoDeObj)

function minhaFuncao(a, b, ...params) {
  console.log(a)
  console.log(b)
  console.log(params)
}

minhaFuncao(12, 2, 5, 76, 30, 20)