const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const users = [
  { username: 'admin', password: '1234', role: 'admin' },
  { username: 'user', password: '1234', role: 'user' }
];

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token ausente' });

  // Simulação de verificação de token
  if (token !== 'example-token') return res.status(403).json({ error: 'Token inválido' });

  // Simular que o usuário logado é o admin
  req.user = { username: 'admin' };
  next();
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

  res.json({ token: 'example-token' });
});

app.get('/api/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.username === req.user.username);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  res.json({ username: user.username, role: user.role });
});

app.get('/dashboard', (req, res) => {
  res.json({
    totalOrders: 15,
    totalClients: 8,
    totalRevenue: 4200
  });
});

app.get('/orders', (req, res) => {
  res.json([
    { id: 1, status: 'Pendente', total: 150 },
    { id: 2, status: 'Finalizado', total: 200 }
  ]);
});

app.get('/services', (req, res) => {
  res.json([
    { id: 1, name: 'Lavagem Simples', price: 50 },
    { id: 2, name: 'Lavagem Profunda', price: 100 }
  ]);
});

app.get('/clients', (req, res) => {
  res.json([
    { id: 1, name: 'João', phone: '9999-9999' },
    { id: 2, name: 'Maria', phone: '8888-8888' }
  ]);
});

app.get('/carpets', (req, res) => {
  res.json([
    { id: 1, client: 'João', type: 'Persa', status: 'Lavando' },
    { id: 2, client: 'Maria', type: 'Moderno', status: 'Pronto' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});