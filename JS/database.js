// // Imports mssql library
// const sql = require('mssql');

// // Configuration object for Azure SQL Database
// const config = {
//   user: 'jaylex05@prismoria',
//   password: 'Pris@m1n',
//   server: 'prismoria.database.windows.net',
//   database: 'PrismaChat',
//   options: {
//     encrypt: true,
//     enableArithAbort: true,
//   },
// };

// // Connect to database and execute query
// async function connectAndQuery() {
//   try {

//       // Create connection
//       let connection = await sql.connect(config);

//       console.log("Connected to the database!");

//       let result = await connection.request().query('SELECT TOP 5 * FROM dbo.Messagess');

//       console.log("Query Results:", result.recordset);

//       // Close the connection
//       connection.close();
//   } catch (err) {
//       console.error('Database connection error:', err);
//   }
// }

// // Run the function
// connectAndQuery();


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

// Get files from folder 
app.use(express.static(path.join(__dirname, 'public')));

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
  console.log(`Server running at http://localhost:${PORT}`);
});
