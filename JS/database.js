// Imports libraries
const express = require('express');
const sql = require('mssql');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Cors policy
app.use(cors({
  origin: ['http://prismaverse.csh.rit.edu', 'http://localhost:5500'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
  credentials: true,
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://prismaverse.csh.rit.edu");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Configuration
const config = {
  user: 'jaylex05@prismoria',
  password: 'Pris@m1n',
  server: 'prismoria.database.windows.net',
  database: 'PrismaChat',
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
  connectionTimeout: 30000,
  requestTimeout: 30000,
};

// Create a connection pool
let poolPromise = sql.connect(config)
  .then(pool => {
    console.log("Connected to the database through connection pool!");
    return pool;
  })
  .catch(err => {
    console.error("Database Connection Failed! Error: ", err);
    throw err;
  });

// Connect to database and execute query
async function getMessages() {
  try {
    console.log("Attempting to query messages...");
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM dbo.Messagess');
    console.log("Messages retrieved:", result.recordset);
    return result.recordset;
  } catch (err) {
    console.error('Database query error:', err);
    throw new Error('Error querying the database.');
  }
}

// The API url endpoint to get the messages
app.get('/api/messages', async (req, res) => {
  console.log("request");
  try {
    const messages = await getMessages();
    console.log("sending");
    res.json(messages);
  } catch (err) {
    console.error('Error in API endpoint:', err);
    res.status(500).send('Error querying the database.');
  }
});


app.use(express.static(path.join(__dirname, 'JS')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://prismaverse.csh.rit.edu:${PORT}`);
});

module.exports = { getMessages };

// console.log("hi");
// // Get files from folder 
// app.use(express.static(path.join(__dirname, 'public')));

// //console.log("hi2");

// // Function to get messages from the database
// async function getMessages() {
//   try{
//     console.log("attempting connection");
//     const pool = await sql.connect(config);
//     console.log("connected");

//     const result = await pool.request().query('SELECT * FROM dbo.Messagess');
//     pool.close();
    
//     console.log("messages retrieved:", result.recordset);
//     return result.recordset;
//   } 
//   catch (err){
//     console.error('Database query error:', err);
//     throw new Error('Error querying the database.');
//   }
//   // finally{
//   //   await sql.close();
//   // }
// };

// // When script starts
// // (async () => {
// //   try {
// //     const messages = await getMessages();
// //     console.log('Messages on startup:', messages);
// //   } catch (err) {
// //     console.error('Error during startup message fetch:', err);
// //   }
// // })();

//   // API endpoint to get messages
  
//   app.use((req, res, next) => {
//     console.log(`Incoming request: ${req.method} ${req.url}`);
//     next();
//   });
  

// app.get('/api/messages', async (req, res) => {
//   try{
//     const messages = await getMessages();
//     res.json(messages);
//   } 
//   catch (err){
//     console.error('Error:', err);
//     res.status(500).send('Error querying the database.');
//   }
// });

//   app.listen(PORT, '0.0.0.0', () => {
//   console.log(`Server running at http://prismaverse.csh.rit.edu:${PORT}`);
// });

//getMessages();

//export {getMessages};
//module.exports = {getMessages};