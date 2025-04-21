const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (email === 'exemple@gmail.com.br' && senha === '123456') {
    return res.status(200).json({ message: 'Login realizado com sucesso!' });
  }

  return res.status(401).json({ message: 'Credenciais inválidas' });
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000 🚀');
});
