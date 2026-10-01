const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const adminRoutes = require('./routes/admin');
const trackingRoutes = require('./routes/tracking');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos Estáticos (Front-end, CSS, JS, Imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
app.use('/api/admin', adminRoutes);
app.use('/api/tracking', trackingRoutes);

// Rotas Amigáveis
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/rastreio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'rastreio.html'));
});

app.get('/catalogo', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback para SPA / Home
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`⚡ FLINN iPHONES - Sistema de Vendas & Logística Online`);
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📦 Rastreio Público:    http://localhost:${PORT}/rastreio`);
  console.log(`🔐 Painel Admin:        http://localhost:${PORT}/admin  (Senha: 1103)`);
  console.log(`=======================================================`);
});
