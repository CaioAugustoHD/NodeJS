//Express, rotas e requisições

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Seja bem vindo!')
});

app.get('/parametros/:nome', (req, res) => {
    res.send('Seu nome: ' + req.params.nome)
})

app.get('/sobre', (req, res) => {
    res.send('Servidor para aprender a utilizar rotas com Express')
});


app.listen(8081, () => {
    console.log('Servidor rodando na porta http://localhost:8081');
});