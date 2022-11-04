const express = require('express')

const server = express()
const port = 3000
server.use(express.json())


const products = [
  { id: 1, name: 'TV', price: 2000 },
  { id: 2, name: 'Geladeira', price: 4000 },
  { id: 3, name: 'Fogão', price: 1500 },
  { id: 4, name: 'Notebook', price: 5000 },
  { id: 5, name: 'Mouse', price: 200 },
]

const filteredProducts = products.filter((product) => product.price >= 2000)

const users = [
  { name: 'Cassio', age: 29 },
  { name: 'Mario', age: 30 },
  { name: 'Wendel', age: 25 },
]

server.get('/', (request, response) => {
  response.status(200).json(products)
})

server.get('/filtered-products', (request, response) => {
  response.status(200).json(filteredProducts)
})

server.get('/users', (request, response) => {
  response.status(200).json(users)
})

server.post('/products', (request, response) => {
  if(request.body.price <= 0) {
    response.status(400).send({ message: 'O produto não pode ter o valor menor ou igual a zero' })
  } else {
    products.push(request.body)
    response.status(201).send({ message: 'Produto adicionado com sucesso' })
  }
})

server.delete('/products/:id', (request, response) => {
  const index = products.findIndex((product) => product.id == request.params.id)

  if (index === -1) {
    return response.status(400).send({ message: 'Esse produto não existe' })
  }
  
  products.slice(index, 1)

  response.status(200).send({ message: 'Produto removido com sucesso' })
})

server.get('/home', (request, response) => {
  response.sendFile(`${__dirname}/index.html`)
})

server.get('/contacts', (request, response) => {
  response.sendFile(`${__dirname}/contatos.html`)
})

server.listen(port, () => console.log(`Server running at http://localhost:${port}`))
