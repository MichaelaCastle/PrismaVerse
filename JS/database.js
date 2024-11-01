// Imports libraries
const express = require('express');
const sql = require('mssql');
const path = require('path')

const app = express();
const PORT = 3000;

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

// Get data from database and parses to json
app.get('/api/messages', async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`Server running at http://prismaverse.csh.rit.edu:${PORT}`);
});
