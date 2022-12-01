const express = require('express');
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = 3000;

/*Por padrão o express recebe as requisições e devolve como texto. Mas para o padrão do dia a dia precisamos trabalhar com JSON, esse comando faz com que todas as requisições e respostas do servidor seja em JSON */
app.use(express.json());

app.use(homeRoutes);
app.use(userRoutes);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));