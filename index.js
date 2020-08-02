const express = require('express');
const userRoute = require('./Routes/userRoute');
const bodyParser = require('body-parser')

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json());
userRoute(app);

app.get("/", (req,res) => res.send('Olá mundo!')); 

app.listen(port, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
})