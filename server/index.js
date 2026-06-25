/**
 * Servidor mock para la app de padres matIA.
 * Endpoints estáticos con CORS para pruebas en Expo Go.
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const readJson = (file) =>
  JSON.parse(fs.readFileSync(path.join(__dirname, 'data', file), 'utf8'));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'matIA-parents-mock' });
});

app.post('/api/auth/login', (_req, res) => {
  setTimeout(() => {
    res.json({ ok: true, token: 'mock-token', user: readJson('child.json').parent });
  }, 800);
});

app.get('/api/child', (_req, res) => {
  const data = readJson('child.json');
  res.json({ parent: data.parent, child: data.child });
});

app.get('/api/dashboard', (_req, res) => {
  const data = readJson('child.json');
  res.json(data.dashboard);
});

app.get('/api/cartridges', (_req, res) => {
  const data = readJson('child.json');
  res.json(data.cartridges);
});

app.get('/api/report', (_req, res) => {
  const data = readJson('child.json');
  res.json(data.report);
});

app.get('/api/controls', (_req, res) => {
  const data = readJson('child.json');
  res.json(data.controls);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`matIA mock server → http://0.0.0.0:${PORT}`);
});
