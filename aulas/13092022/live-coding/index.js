const mensagem = function() {
  console.log('Essa mensagem será executada em 3 segundos')
}

setTimeout(mensagem, 0)

console.log('Aquiii')

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

function processar(numero1, numero2, callback) {
  return callback(numero1, numero2)
}

// console.log(processar(10, 20, multiplica))
// console.log(processar(12, 100, soma))
// console.log(processar(10, 0, divide))

function alterarStatusEmCartaz(codigo) {
  const filmeEncontrado = buscarFilme(codigo)
  filmeEncontrado[0].emCartaz = !filmeEncontrado[0].emCartaz
  return filmeEncontrado
}

// console.log(alterarStatusEmCartaz(2))

// ------------------------------


// map

const array = [1, 4, 6, 7, 9, 10, 24]

const arrayMapeado = array.map(function(valor) {
  return valor * 2
})

console.log(arrayMapeado)
