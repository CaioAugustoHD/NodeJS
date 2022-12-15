const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(8081, ()=> {
    console.log('Servidor rodando!');
})