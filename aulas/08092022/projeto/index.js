const alunos = require('../alunos.json')

console.log(alunos)

// const catalogo = [
//   {

//   }
// ]

// --- JSON ---

// Mostrar que não pode colocar função/data em JSON
// Mostrar que pode colocar função/data em Object

// JSON.stringify: Object -> JSON
// JSON.parse: JSON -> Object

const alunosNoFormatoJSON = JSON.stringify(alunos)
// console.log(alunosNoFormatoJSON)

const alunosNoFormatoObjeto = JSON.parse(alunosNoFormatoJSON)
// console.log(alunosNoFormatoObjeto)

// Objetos e JSON
const obj = {
  nome: 'Cassio',
  'estaAtivo': false,
  "fn": function() {
    return 'Olá'
  },
  data: new Date()
}

const pessoa = {
  nome: 'Cassio',
  idade: 29,
  estaAtivo: true,
  dataNascimento: '02/03/1993',
  saudar: function () {
    return "Olá, meu nome é Cassio"
  }
}

// podemos acessar assim:

pessoa['nome']

// console.log(pessoa.saudar())

pessoa.nome = 'Mario'

// console.log(pessoa)

// -----------------------------------------------

// --- Método de Strings ---

/**
 * Bom, como vocês já viram no nivelamento, as strings são um conjunto de caracteres
 * ou seja, podemos chamar uma string de um array de caracteres.

 * Sendo um array de caracteres, nós podemos manipulá-la de forma parecida com os arrays.

 * Vamos lá, na string:

 * - temos os indices -> ou seja, podemos acessar o index 0, 1, 2, 3 assim como um array
 * - podemos acessar um determinado caractere como se fosse um array, assim:
 * 
 * 
 */

const nome = "Cassio";
 
nome[0]; // C
 
// - temos o seu tamanho assim como um array, e para sabermos o tamanho de uma string,
// - podemos utilizar o `length`, por exemplo:
 
nome.length; // 6

const meuNome = 'Cassio Oliveira Silva'

// console.log(meuNome[7])
// console.log(meuNome.length)
// console.log(meuNome.indexOf('a'))
// console.log(meuNome.indexOf('pedro')) // se não encontrar nada

const meuUltimoNome = meuNome.slice(16, 21)
// console.log(meuUltimoNome)

const hackzinho = meuNome.slice(-1) // trás a última letra da string
// console.log(hackzinho)

const meuNomeComEspacos = '      Cassio Oliveira Silva           '
const meuNomeSemEspacos = meuNomeComEspacos.trim()
// console.log(meuNomeSemEspacos)

const frase = 'Eu sou aluno(a) da Digital House'
const minhaFraseQuebrada = frase.split(' ')
// console.log(minhaFraseQuebrada[minhaFraseQuebrada.length - 1])

// console.log(frase.replace('House', 'Casa'))
// console.log(frase.replace('a', '@'))

// -----------------------------------------------

// --- Ciclo for ---

const meuArray = [5, 3, 4, 6, 10, 23, 30]
const meuObjeto = {
  nome: 'Cassio',
  idade: 29,
  endereco: 'Rua Castro',
  numero: 200,
  estaAtivo: true
}

// for(let i = 0; i < meuArray.length; i++) {
//   console.log(meuArray[i])
// } 

// --- for in ---

// - Podemos utilizar ele para fazer um loop por um objeto ou por um array
// - Retorna o indice/propriedade desse objeto ou array

// for (const indice in meuArray) {
//   console.log(indice)
//   console.log(meuArray[indice])
// }

// for (const propriedade in meuObjeto) {
//   console.log(meuObjeto[propriedade])
// }

// --- for of ---

// - Não podemos utilizá-lo com objeto, somente com array
// - Retorna o valor de cada posição do array, não o indice

const meuArray2 = [5, 3, 4, 6, 10, 23, 30]
const meuObjeto2 = {
  nome: 'Mario',
  idade: 28,
  estaAtivo: false
}

// for (const valor of meuArray2) {
//   console.log(valor)
//   console.log(meuArray2.indexOf(valor))
// }

// for (const valor of meuObjeto2) {
//   console.log(valor)
// }

// -----------------------------------------------

// --- Arrow Functions ---

function minhaFuncao(a, b, c, d, e) {

}

const minhaFuncao2 = function() {

}

const minhaFuncao3 = (a, b) => {
  const soma = a + b
  return soma
}

// console.log(minhaFuncao3(4, 6))

const minhaFuncao4 = (a, b) => a * b

// console.log(minhaFuncao4(4, 6))

// -----------------------------------------------

// --- Condicionais ---

// Até o momento, nós vimos as condicionais com o if, certo?
// Mas temos uma forma diferente de fazer o if, que é o operador ternário

const verificaIdade = (idade) => {
  // if(idade >= 18) {
  //   if(idade === 25) {
  //     return 'Acertou'
  //   }
  //   return 'Eu sou maior de idade'
  // } else {
  //   return 'Eu sou menor de idade'
  // }

  return idade >= 18 ? idade === 25 ? 'acertou' : 'Eu sou maior de idade' : 'Eu sou menor de idade'
}

// console.log(verificaIdade(25))

const verificaDiaSemana = (dia) => {
  // if(dia === 'Sabado') {
  //   console.log('Dia de descansar')
  // } else if (dia === 'Domingo') {
  //   console.log('Dia de almoçar fora')
  // } else if (dia === 'Segunda') {
  //   console.log('Dia de estudar')
  // } else if (dia === 'Terça') {
  //   console.log('Dia de aula')
  // } else {
  //   console.log('Dia de trabalhar')
  // }

  switch(dia) {
    case 'Sabado': 
      console.log('Dia de descansar')
      break
    case 'Domingo': 
      console.log('Dia de almoçar fora')
      break
    case 'Segunda':
      console.log('Dia de estudar')
      break
    case 'Terça':
      console.log('Dia de aula')
      break
    default:
      console.log('Dia de trabalhar')
      break
  }
}

// verificaDiaSemana('Terça')

