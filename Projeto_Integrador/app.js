const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const registerRoute = require('./routes/register');
app.use('/api', registerRoute);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
