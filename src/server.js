import express from 'express';
const app = express();

// Configuração para lidar com cabeçalhos do proxy reverso
app.set('trust proxy', true);

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Seu aplicativo Node.js está funcionando!');
});

// Inicie o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Aplicativo Node.js rodando na porta ${PORT}`);
});
