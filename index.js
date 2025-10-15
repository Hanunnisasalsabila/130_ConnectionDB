const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  port: '3306',
  password: 'SachaFoxie8',
  database: 'mahasiswa'
});

db.connect((err) => {
  if (err) {
    console.log('Error connecting to Mysql: ' + err.stack);
    return;
  }
  console.log('Connected to Mysql successfully');
});

app.get('/', (req, res) => {
  res.send('Selamat datang di API Biodata!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});