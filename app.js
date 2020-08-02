const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) => res.send('Olá mundo!')); 

app.listen(port, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:3000/");
})