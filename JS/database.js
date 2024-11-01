// Imports libraries
const express = require('express');
const sql = require('mssql');
const path = require('path')

const app = express();
const PORT = 4000;

const config = {
  user: 'jaylex05@prismoria',
  password: 'Pris@m1n',
  server: 'prismoria.database.windows.net',
  database: 'PrismaChat',
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

console.log("hi");
// Get files from folder 
app.use(express.static(path.join(__dirname, 'public')));

console.log("hi2");

app.get('/test', (req, res) => {
  res.send('Test route working!');
});

console.time('DB Connection');
const pool = await sql.connect(config);
console.timeEnd('DB Connection');

console.time('Query Execution');
const result = await pool.request().query('SELECT TOP 5 * FROM dbo.Messagess');
console.timeEnd('Query Execution');


// Get data from database and parses to json
app.get('/api/messages', async (req, res) => {
  console.log("api?");
  try {
    const pool = await sql.connect(config);
    console.log('Connected to the database!');

    const result = await pool.request().query('SELECT TOP 5 * FROM dbo.Messagess');
    
    res.json(result.recordset);

    pool.close();
  } 
  catch (err) {
    console.error('Database query error:', err);
    res.status(500).send('Error querying the database.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://prismaverse.csh.rit.edu:${PORT}`);
});
