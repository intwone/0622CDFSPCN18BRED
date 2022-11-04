const http = require('http')

const port = 3000

// http.createServer((request, response) => {
//   console.log('Acessei o meu servidor')
// }).listen(port, () => console.log(`Server running at http://localhost:${port}`))

// --------------------------------------------------------

// http.createServer((request, response) => {
//   console.log(request.url)
//   response.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
//   response.end("Você acessou o servidor")
// }).listen(port, () => console.log(`Server running at http://localhost:${port}`))

// --------------------------------------------------------

// http.createServer((request, response) => {
//   response.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
  
//   switch(request.url) {
//     case '/':
//       response.end('Você está na página home')
//       break
//     case '/products':
//       response.end('Você está na página de produtos')
//       break
//     case '/users':
//       response.end('Você está na página de usuários')
//       break
//     default:
//       response.end('Está página não existe')
//   }
// }).listen(port, () => console.log(`Server running at http://localhost:${port}`))

// --------------------------------------------------------

const products = [
  { name: 'TV', price: 2000 },
  { name: 'Geladeira', price: 4000 },
  { name: 'Fogão', price: 1500 },
  { name: 'Notebook', price: 5000 },
  { name: 'Mouse', price: 200 },
]

const filteredProducts = products.filter((product) => product.price >= 2000)

const users = [
  { name: 'Cassio', age: 29 },
  { name: 'Mario', age: 30 },
  { name: 'Wendel', age: 25 },
]

http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "application/json" })
  
  switch(request.url) {
    case '/':
      response.end(JSON.stringify(products))
      break
    case '/filtered-products':
      response.end(JSON.stringify(filteredProducts))
      break
    case '/users':
      response.end(JSON.stringify(users))
      break
    default:
      response.end(JSON.stringify({ message: 'Esta rota não existe' }))
  }
}).listen(port, () => console.log(`Server running at http://localhost:${port}`))

