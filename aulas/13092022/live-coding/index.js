const mensagem = function() {
  // console.log('Essa mensagem será executada em 3 segundos')
}

setTimeout(mensagem, 0)

// console.log('Aquiii')

// -------------

function soma(numero1, numero2) {
  return numero1 + numero2
}

function divide(numero1, numero2) {
  return numero1 / numero2
}

function multiplica(numero1, numero2) {
  return numero1 * numero2
}

function restoDaDivisao(numero1, numero2) {
  return numero1 % numero2
}

// Declaracao da funcao processar
function processar(numero1, numero2, callback) {
  const retornoDaFuncaoCallback = callback(numero1, numero2)
  return retornoDaFuncaoCallback
}

// function qualquer(a, b) {
//   return a - b * 2
// }

// const fn2 = (a, b) => {
//   return a * b
// }

// Chamada/Invocacao da funcao processar
processar(10, 20, (a, b) => {
  a * b
})

// console.log(processar(12, 100, soma))
// console.log(processar(10, 0, divide))

function alterarStatusEmCartaz(codigo) {
  const filmeEncontrado = buscarFilme(codigo)
  filmeEncontrado[0].emCartaz = !filmeEncontrado[0].emCartaz
  return filmeEncontrado
}

// console.log(alterarStatusEmCartaz(2))

