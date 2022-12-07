const express = require("express");
const usersRouter = require('./routes/usersRouter');
const homeRouter = require('./routes/homeRouter');
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const path = require('path');

const server = express();
const port = 4000;

server.set('view engine', 'ejs');
server.set('views', path.resolve("src", "views"));

server.use(express.json());
server.use(express.static(path.resolve("src", "public")));

server.use(usersRouter);
server.use(homeRouter);
server.use(authRouter);
server.use(adminRouter);


server.listen(port, () =>
  console.log(`Servidor rodando no http://localhost:${port}`)
);