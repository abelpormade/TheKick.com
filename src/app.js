const express = require('express');
const app = express();
// Middleware para ler JSON
app.use(express.json());
// Rotas básicas
const path = require('path');

// Middleware para servir arquivos da pasta "public", faz com que tudo dentro da pasta public seja acessivel ao navegador
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname,'views', 'thekick.html'));
});

app.get('/login', (req, res) => {
  res.send('Faça seu login');
});

app.get('/sobre', (req, res) => {
  res.send('Página Sobre');
});

// Exporta o app para usar no server.js
module.exports = app;
