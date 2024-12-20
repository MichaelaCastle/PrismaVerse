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

app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();  // Pass the request to the next middleware or route handler
});


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
async function addMessage({ UserId, Content, UsingCharacter, CharacterId, IsImage, Deleted, SentBy}) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('UserId', sql.Int, UserId)
      .input('Content', sql.NVarChar, Content)
      .input('UsingCharacter', sql.Bit, UsingCharacter)
      .input('CharacterId', sql.Int, CharacterId || null)
      .input('Deleted', sql.Bit, Deleted)
      .input('IsImage', sql.Bit, IsImage)
      .input('SentBy', sql.Int, SentBy)
      .query(`
        INSERT INTO ChatDM (UserId, Content, UsingCharacter, CharacterId, IsImage, Deleted, SentBy)
        VALUES (@UserId, @Content, @UsingCharacter, @CharacterId, @Deleted, @IsImage, @SentBy);
        SELECT SCOPE_IDENTITY() AS MessageId;
      `);

    return {
      MessageId: result.recordset[0].MessageId,
      UserId,
      Content,
      UsingCharacter,
      CharacterId,
      IsImage,
      Deleted,
      SentBy,
    };
  } catch (err) {
    console.error('Error inserting message into database:', err);
    throw new Error('Failed to insert message.');
  }
}

async function addRole({userid, name, nickname, color, pfp, notes, description, relinquised}) {
  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('userid', sql.Int, userid || 2)
      .input('name', sql.NVarChar, name)
      .input('nickname', sql.NVarChar, nickname)
      .input('color', sql.NVarChar, color)
      .input('pfp', sql.NVarChar, pfp)
      .input('notes', sql.NVarChar, notes)
      .input('description', sql.NVarChar, description)
      .input('relinquised', sql.Bit, relinquised !== undefined ? relinquised : true)
      .query(`
        INSERT INTO Roles (UserId, Name, Nickname, Color, Pfp, Notes, Description, Relinquised)
        VALUES (@userid, @name, @nickname, @color, @pfp, @notes, @description, @relinquised);
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
      relinquised: relinquised !== undefined ? relinquised : true
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
  const { UserId, Content, UsingCharacter, CharacterId, IsImage, Deleted, SentBy } = req.body;

  // Make sure UserId Content SentBy are provided
  if (!UserId || !Content || !SentBy) {
    return res.status(400).send('UserId, Content, and SentBy are required.');
  }

  try {
    // Call addMessage
    const newMessage = await addMessage({
      UserId,
      Content,
      UsingCharacter: UsingCharacter || false,
      CharacterId: CharacterId || null,
      IsImage: IsImage || false,
      Deleted: Deleted || false,
      SentBy,
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
  console.log("POST /api/messages called");
  console.log("Request body:", req.body);
  const { userid, name, nickname, color, pfp, notes, description, relinquised } = req.body;

  // Make sure userId sentby and content are provided
  if (!UserId || !Content || !SentBy) {
    return res.status(400).send('userid and name are required.');
  }

  try {
    console.log("Adding role to database");
    // Call addRole
    const newRole = await addRole({
      userid,
      name, 
      nickname, 
      color: color || 0,
      pfp: pfp || false,
      notes, 
      description, 
      relinquised: relinquised !== undefined ? relinquised : true,
    });
    console.log("Role added to database");
    res.status(201).json(newRole);
  } catch (err) {
    console.error('Error in POST /api/roles:', err);
    res.status(500).send('Failed to insert role.');
  }
});

//API URL to update roles
app.patch('/api/roles/:id', async (req, res) => {
  const { id } = req.params;
  const { notes, description, relinquised } = req.body;

  // At least one field is provided
  if (notes === undefined && description === undefined && relinquised === undefined) {
    return res.status(400).send('At least one field (notes, description, or relinquised) is required.');
  }

  try {
    const pool = await poolPromise;
    const updates = [];
    const inputs = [];

    // Makes the query with fields provided
    if (notes !== undefined) {
      updates.push('Notes = @notes');
      inputs.push({ name: 'notes', type: sql.NVarChar, value: notes });
    }
    if (description !== undefined) {
      updates.push('Description = @description');
      inputs.push({ name: 'description', type: sql.NVarChar, value: description });
    }
    if (relinquised !== undefined) {
      updates.push('Relinquised = @relinquised');
      inputs.push({ name: 'relinquised', type: sql.Bit, value: relinquised });
    }

    if (updates.length === 0) {
      return res.status(400).send('No valid fields provided for update.');
    }

    // Make the query
    const query = `UPDATE Roles SET ${updates.join(', ')} WHERE Id = @id`;

    // Execute query
    const request = pool.request();
    inputs.forEach(input => request.input(input.name, input.type, input.value));
    request.input('id', sql.Int, id);

    await request.query(query);

    res.status(200).json({ id, notes, description, relinquised });
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
