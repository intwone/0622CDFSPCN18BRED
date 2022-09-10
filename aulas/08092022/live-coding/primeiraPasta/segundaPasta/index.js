const alunos = require('../../alunos.json')

// console.log(alunos)
// console.log(typeof alunos)

const alunosEmFormatoJSON = JSON.stringify(alunos)
// console.log(alunosEmFormatoJSON)
// console.log(typeof alunosEmFormatoJSON)

const obj = {
  "nome": "Cassio",
  'idade': 29,
  estaAtivo: true,
  minhaFuncao: function () {
    return 'Hello World!'
  }
}

// console.log(obj["idade"])
obj.nome = 'Wendel'

// console.log(obj.minhaFuncao())

//-------------------------

const nome = "Mario da Silva" 
// console.log(nome[0])
// console.log(nome.length)
const variavelDeBusca = 'a'
// console.log(nome.indexOf(variavelDeBusca))

// console.log(nome.slice(9, 14))

// console.log(nome.slice(-1))

const cidade = '        Curitiba      Qualquer        '
// console.log(cidade)
const cidadeSemEspacos = cidade.trim()
// console.log(cidadeSemEspacos)


const aluno = 'Mariazinha da Silva'
const alunoSplitado = aluno.split(' ')
// console.log(alunoSplitado)

//------------------

const minhaString = 'cassio'

// for(let i = 0; i < minhaString.length; i++) {
//   console.log(minhaString[i])
// }

// Pode utilizar ele para fazer looping no array ou em um objeto
// Array: Retorna o indice e não o valor
// Objeto: Retorna a propriedade

const meuObjeto = {
  nome: 'Cassio',
  idade: 29,
  endereco: 'Rua Tal, numero tal'
}

for(let indice in meuObjeto) {
  // console.log(indice)
  // console.log(meuObjeto[indice])
}


// ---------------------

function nomeDaMinhaFuncao(a, b, c) {

}

const minhaFuncaoDois = function(a, b, c) {

}

// Detalhes: 
// - Se na arrow function tiver só um parâmetro, não precisa dos parenteses
// exemplo: const minhaFuncao = parametro => {}

// - Se na arrow function tiver mais de um parâmetro, precisa dos parenteses
// exemplo: const minhaFuncao = (parametro1, parametro2) => {}

// - Se na arrow function tiver só uma instrução, não precisa das chaves e nem do return
// exemplo: const minhaFuncao = (parametro1, parametro2) => parametro1 + parametro2

const minhaFuncaoTres = (a, b, c) => {

}

const minhaFuncaoQuatro = idade => {
  const multiplaPorDois = idade * 2
  return multiplaPorDois
}

// console.log(minhaFuncaoQuatro(29))

//-----------------------------

const minhaIdade = 15

// if(minhaIdade >= 18) {
//   if(minhaIdade === 17) {
//     console.log('Acertou')
//   }
//   console.log('Adulto')
// } else {
//   console.log('Jovem')
// }

// minhaCondicao ? '' : ''

                       // TRUE                 // FALSE
// minhaIdade >= 18 ? console.log('Adulto') : console.log('Jovem')

const verificaDiaDaSemana = (dia) => {
  // if(dia === 'Segunda') {
  //   console.log('Não tem aula')
  // } else if (dia === 'Terça') {
  //   console.log('Tem aula')
  // } else if (dia === 'Quarta') {
  //   console.log('Descanso')
  // } else {
  //   console.log('Colearning')
  // }

  switch(dia) {
    case 'Segunda':
      console.log('Não tem aula')
      break
    case 'Terça':
      console.log('Tem aula')
      break
    case 'Quarta':
      console.log('Descanso')
      break
    default:
      console.log('Colearning')
  }
}

// verificaDiaDaSemana('Segunda')



















           