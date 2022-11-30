const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = 3000;


app.use(homeRoutes);
app.use(userRoutes);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));