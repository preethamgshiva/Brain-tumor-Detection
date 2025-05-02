const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'MiniProject', // Replace with your database name
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Connected to the database');
    }
});

// API route for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else if (result.length > 0) {
            res.status(200).json({ message: 'Login successful', user: result[0] });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    });
});

app.post('/upload-patient', (req, res) => {
    const { name, age, gender, remarks } = req.body;

    if (!name || !age || !gender) {
        return res.status(400).json({ error: 'Name, age, and gender are required fields' });
    }

    const sql = 'INSERT INTO patients (name, age, gender, remarks) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, age, gender, remarks], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.status(200).json({ message: 'Patient details uploaded successfully' });
        }
    });
});

app.get('/patients', (req, res) => {
    const sql = 'SELECT * FROM patients';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(result);
    });
});



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
