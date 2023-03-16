// importações
const express = require("express");
const methodOverride = require('method-override')
const session = require("express-session");
const logger = require('morgan');

const usersRouter = require('./routes/usersRouter');
const homeRouter = require('./routes/homeRouter');
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const carrinhoRouter = require('./routes/carrinhoRouter');
const requestLog = require('./middlewares/requestLog');
/* const testeMiddleware = require('./middlewares/testeMiddleware'); */
const path = require('path');

//variáveis
const server = express();
const port = 4000;

//middlewares
server.set('view engine', 'ejs');
server.set('views', path.resolve("src", "views"));

server.use(express.json());
server.use(express.urlencoded({ extended: false }))
server.use(methodOverride('_method'))

server.use(express.static(path.resolve("src", "public")));

server.use(logger('dev'));

server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

/* server.use(testeMiddleware); */
server.use(requestLog);

//rotas
server.use(usersRouter);
server.use(homeRouter);
server.use(authRouter);
server.use(carrinhoRouter);
server.use(adminRouter);

server.use((req, res, next) => {
  return res.status(404).render('not-found')
})


server.listen(port, () =>
  console.log(`Servidor rodando no http://localhost:${port}`)
);