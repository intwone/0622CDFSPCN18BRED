// Importações
const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home');

//Variaveis
const app = express();
const port = 3000;

//Configurações / Middlewares
app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));
app.use(express.json());
app.use(express.static(path.resolve("src", "public")));


//Rotas
app.use(homeRouter);

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))
// npm run dev -> nodemon | npm start -> node