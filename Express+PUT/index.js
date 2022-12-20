const express = require('express');
const app = express();

app.use(express.json());

let informacao = "antiga informação";

app.put('/', (req, res) => {
    informacao = req.body.informacao;
    res.send(informacao)
})

app.get('/', (req, res) => {
    res.send(informacao)
})

app.listen(8081, () => console.log('Servidor rodando em http://localhost:8081'));