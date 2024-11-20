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

// Middleware to parse JSON request body
app.use(express.json());  // This line is critical to parse JSON body in POST requests

// Configuration for database connection
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

// Connect to database and execute query to get messages
async function getMessages() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM ChatDM');
    return result.recordset;
  } 
  catch (err) {
    throw new Error('Error querying the database.');
  }
}

// Connect to database and execute query to add a message
async function addMessage({ userId, content, usingCharacter, characterId, isImage, deleted }) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('userId', sql.Int, userId)
      .input('content', sql.NVarChar, content)
      .input('usingCharacter', sql.Bit, usingCharacter)
      .input('characterId', sql.Int, characterId || 0)
      .input('isImage', sql.Bit, isImage)
      .input('deleted', sql.Bit, deleted)
      .query(`
        INSERT INTO ChatDM (UserId, Content, UsingCharacter, CharacterId, IsImage, Deleted)
        VALUES (@userId, @content, @usingCharacter, @characterId, @isImage, @deleted);
        SELECT SCOPE_IDENTITY() AS MessageId;
      `);

    return {
      messageId: result.recordset[0].MessageId,
      userId,
      content,
      usingCharacter,
      characterId,
      isImage,
      deleted,
    };
  } catch (err) {
    console.error('Error inserting message into database:', err);
    throw new Error('Failed to insert message.');
  }
}

// The API URL to get the messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await getMessages();
    res.json(messages);
  } 
  catch (err) {
    console.error('Error in API endpoint:', err);
    res.status(500).send('Error querying the database.');
  }
});

// API URL to add a message
app.post('/api/messages', async (req, res) => {
  console.log("hi");
  const { userId, content, usingCharacter, characterId, isImage, deleted } = req.body;

  // Make sure userId and content are provided
  if (!userId || !content) {
    return res.status(400).send('userId and content are required.');
  }

  try {
    // Call addMessage
    const newMessage = await addMessage({
      userId,
      content,
      usingCharacter: usingCharacter || false,
      characterId: characterId || 0,
      isImage: isImage || false,
      deleted: deleted || false,
    });

    res.status(201).json(newMessage);
  } catch (err) {
    console.error('Error in POST /api/messages:', err);
    res.status(500).send('Failed to insert message.');
  }
});


// Get this directory
app.use(express.static(path.join(__dirname, 'JS')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export functions
module.exports = { getMessages };
