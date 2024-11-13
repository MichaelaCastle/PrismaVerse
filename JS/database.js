// Imports libraries
const express = require('express');
const sql = require('mssql');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Cors policy
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://prismaverse.csh.rit.edu',
      'http://localhost:5500',
      'http://127.0.0.1:5503',
    ];

    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));


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
    //console.log("Attempting to query messages...");
    const pool = await poolPromise;
    // Execute query (Retrieve all messages from dbo.Messagess)
    const result = await pool.request().query('SELECT * FROM ChatDM');
    //console.log("Messages retrieved:", result.recordset);
    return result.recordset;
  } 
  catch (err) {
    //console.error('Database query error:', err);
    throw new Error('Error querying the database.');
  }
}

// The API URL to get the messages
app.get('/api/messages', async (req, res) => {
  //console.log("request");
  try {
    // Call getMessages
    const messages = await getMessages();
    //console.log("sending");
    res.json(messages);
  } 
  catch (err) {
    console.error('Error in API endpoint:', err);
    res.status(500).send('Error querying the database.');
  }
});

// Get this directory
app.use(express.static(path.join(__dirname, 'JS')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://prismaverse.csh.rit.edu:${PORT}`);
});

// Export functions
module.exports = { getMessages };