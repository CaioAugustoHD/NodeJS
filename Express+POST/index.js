const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    res.send(req.body)
})

app.listen(8081, ()=> console.log('Servidor rodando em http://localhost:8081'))