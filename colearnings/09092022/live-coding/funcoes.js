// Função Fábrica

const criarPessoa = (nome, idade) => {
  const numeroRandomico = Math.round(Math.random() * 100)

  return {
    nome: nome,
    idade: idade,
    estaAtivo: true,
    dataCriacao: new Date(),
    mensagem: (numero) => `Olá, número ${numeroRandomico * numero} gerado automaticamente`
  }
}

const resultado = criarPessoa('Cassio', 29)
// console.log(resultado.mensagem(2))


// Função Construtora

const lista = []

function CriarProduto(nome, preco, origem) {
  this.nome = nome
  this.preco = preco
  this.origem = origem
  this.quantidade = 10
  this.mensagem = () => `Produto ${this.nome} está com o preco ${this.preco}`
}

const produto1 = new CriarProduto('Notebook', 1232.21, 'Brasil')
// console.log(produto1)

lista.push(produto1)
console.log(lista)
