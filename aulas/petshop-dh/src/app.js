// Importações
const express = require('express');
const path = require('path');
const methodOverride = require('method-override')

const homeRouter = require('./routes/home');
const adminRouter = require('./routes/admin');

//Variaveis
const app = express();
const port = 3000;

//Configurações / Middlewares
app.set('view engine', 'ejs');
app.set("views", path.resolve("src", "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("src", "public")));
app.use(methodOverride('_method'))


//Rotas
app.use(homeRouter);
app.use("/admin", adminRouter); // /admin/

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))
// npm run dev -> nodemon | npm start -> node