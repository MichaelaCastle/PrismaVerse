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
      'http://localhost:3000',
    ];

    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS', 'PATCH'],
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

// Connect to database and execute query to get roles
async function getRoles() {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Roles');
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

async function addRole({userid, name, nickname, color, pfp, notes, description, relinquished}) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('userid', sql.Int, userid)
      .input('name', sql.NVarChar, name)
      .input('nickname', sql.NVarChar, nickname)
      .input('color', sql.Int, color)
      .input('pfp', sql.Bit, pfp)
      .input('notes', sql.NVarChar, notes)
      .input('description', sql.NVarChar, description)
      .input('relinquished', sql.Bit, relinquished)
      .query(`
        INSERT INTO Roles (UserId, Name, Nickname, Color, Pfp, Notes, Description, Relinquished)
        VALUES (@id, @userid, @name, @nickname, @color, @pfp, @notes, @description, @relinquished);
        SELECT SCOPE_IDENTITY() AS RoleId;
      `);

    return {
      RoleId: result.recordset[0].RoleId,
      userid,
      name,
      nickname,
      color,
      pfp,
      notes,
      description,
      relinquished
    };
  } catch (err) {
    console.error('Error inserting role into database:', err);
    throw new Error('Failed to insert role.');
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

// API URL to get roles
app.get('/api/roles', async (req, res) => {
  try {
    const roles = await getRoles();
    res.json(roles);
  } 
  catch (err) {
    console.error('Error in API endpoint:', err);
    res.status(500).send('Error querying the database.');
  }
});


// API URL to add roles
app.post('/api/roles', async (req, res) => {
  console.log("hi");
  const { userid, name, nickname, color, pfp, notes, description, relinquished } = req.body;

  // Make sure userId and content are provided
  if (!userid || !name) {
    return res.status(400).send('userid and name are required.');
  }

  try {
    // Call addRole
    const newRole = await addRole({
      userid,
      name, 
      nickname, 
      color: color || 0,
      pfp: pfp || false,
      notes, 
      description, 
      relinquished: relinquished || false,
    });

    res.status(201).json(newRole);
  } catch (err) {
    console.error('Error in POST /api/roles:', err);
    res.status(500).send('Failed to insert role.');
  }
});

//API URL to update roles
app.patch('/api/roles/:id', async (req, res) => {
  const { id } = req.params;
  const { relinquished } = req.body;

  if (relinquished === undefined) {
      return res.status(400).send('Relinquished status is required.');
  }

  try {
      const pool = await poolPromise;
      await pool.request()
          .input('id', sql.Int, id)
          .input('relinquished', sql.Bit, relinquished)
          .query('UPDATE Roles SET Relinquished = @relinquished WHERE Id = @id');

      res.status(200).json({ id, relinquished });
  } catch (error) {
      console.error('Error updating role:', error);
      res.status(500).send('Failed to update role.');
  }
});


// Get this directory
app.use(express.static(path.join(__dirname, 'JS')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export functions
module.exports = { getMessages, getRoles };
