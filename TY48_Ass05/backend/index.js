const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vitresult'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API endpoint to add result
app.post('/add-result', (req, res) => {
  const { prn, subject, mse, ese } = req.body;
  console.log(prn);
  const query = `INSERT INTO results (prn, subject, mse, ese) VALUES ('${prn}', '${subject}', ${mse}, ${ese})`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error adding result:', err);
      res.status(500).json({ error: 'Error adding result' });
    } else {
      res.json({ message: 'Result added successfully' });
    }
  });
});

// API endpoint to get result by PRN
app.get('/result/:prn', (req, res) => {
  console.log("Hellow");
  const { prn } = req.params;
  const query = 'SELECT * FROM results WHERE prn = ?';
  db.query(query, [prn], (err, results) => {
    if (err) {
      console.error('Error fetching result:', err);
      res.status(500).json({ error: 'Error fetching result' });
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
