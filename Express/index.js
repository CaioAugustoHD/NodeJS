const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Seja bem vindo!')
});


app.get('/sobre', (req, res) => {
    res.send('Servidor para aprender a utilizar rotas com Express')
});


app.listen(8081, () => {
    console.log('Servidor rodando na porta https://localhost:8081');
});