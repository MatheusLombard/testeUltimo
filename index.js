// Importando os módulos
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Inicializando o app Express
const app = express();

// Usando CORS para permitir acessos externos
app.use(cors());

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'sql305.infinityfree.com', // Endereço do servidor MySQL
  user: 'if0_37386836',      // Usuário do banco de dados
  password: 'Ma09souza',      // Senha do banco de dados
  database: 'if0_37386836_emergencialSaude' // Nome do banco de dados
});

// Conectando ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Definindo uma rota para listar os dados da tabela "usuarios"
app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Erro ao buscar dados.' });
      return;
    }
    res.json(results);
  });
});

// Iniciando o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
