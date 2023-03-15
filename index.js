const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", function (req,res) {
    res.send("Olá, seja bem vindo!Estamos construindo uma página muito legal! Aguarde!");
});

app.listen(port, () => {
    console.info('Aplicação rodando em http://localhost: 3000');
});
