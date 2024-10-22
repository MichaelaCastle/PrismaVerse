// Imports mssql library
const sql = require('mssql');

// Configuration object for Azure SQL Database
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

// Connect to database and execute query
async function connectAndQuery() {
  try {

    // Create connection
    let connection = await sql.connect(config);

    console.log("Connected to the database!");

    let result = await connection.request().query('SELECT TOP 5 * FROM dbo.Messagess');

    console.log("Query Results:", result.recordset);

    // Close the connection
    connection.close();
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

// Run the function
connectAndQuery();
