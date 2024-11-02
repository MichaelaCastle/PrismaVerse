// Imports libraries
const express = require('express');
const sql = require('mssql');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

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

// Function to get messages from the database
const getMessages = async () => {
  try{
    const pool = await sql.connect(config);
    console.log('Connected to the database!');
    
    const result = await pool.request().query('SELECT TOP 5 * FROM dbo.Messagess');    
    return result.recordset;
  } 
  catch (err){
    console.error('Database query error:', err);
    throw new Error('Error querying the database.');
  }
};

  // API endpoint to get messages
  app.get('/api/messages', async (req, res) => {
  try{
    const messages = await getMessages();
    res.json(messages);
  } 
  catch (err){
    console.error('Error:', err);
    res.status(500).send('Error querying the database.');
  }
});

  app.listen(PORT, () => {
  console.log(`Server running at http://prismaverse.csh.rit.edu:${PORT}`);
});
