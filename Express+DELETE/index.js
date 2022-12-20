const express = require('express');
const app = express();

app.delete('/:identificador', (req, res) => {
    res.send(req.params.identificador)
})

app.listen(8081, () => console.log('Servidor rodando em http://localhost:8081'));