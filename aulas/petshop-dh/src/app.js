const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send("Express Works!");
})

app.listen(port, () => console.log(`Servidor funcionando na porta ${port}`))
// npm run dev -> nodemon | npm start -> node