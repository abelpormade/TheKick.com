const express = require('express');
const app = express();

// Middleware para ler JSON
app.use(express.json());

// Rotas básicas
app.get('/', (req, res) => {
  res.send('Olá, TheKick.com!');
});

app.get('/login', (req, res) => {
  res.send('Faça seu login');
});

app.get('/sobre', (req, res) => {
  res.send('Página Sobre');
});

// Exporta o app para usar no server.js
module.exports = app;
