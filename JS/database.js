// Imports libraries
const express = require('express');
const sql = require('mssql');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: ['http://prismaverse.csh.rit.edu', 'http://localhost:5500'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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

// Function to get messages from the database using the pool
async function getMessages() {
  let retries = 3;
  while (retries) {
    try {
      console.log("Attempting to connect...");
      const pool = await sql.connect(config);
      const result = await pool.request().query('SELECT * FROM dbo.Messagess');
      pool.close();
      console.log("Messages retrieved:", result.recordset);
      return result.recordset;
    } catch (err) {
      retries -= 1;
      console.log(`Database connection failed. Retries left: ${retries}`);
      if (!retries) throw err; // Throw error if retries exhausted
      await new Promise(res => setTimeout(res, 2000)); // Wait 2 seconds before retry
    }
  }
}


// API endpoint to get messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } catch (err) {
    console.error('Error in API endpoint:', err);
    res.status(500).send('Error querying the database.');
  }
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
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