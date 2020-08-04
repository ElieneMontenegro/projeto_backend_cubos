const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.json());
//userRoute(app);
app.use(routes);

app.listen(port, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
})