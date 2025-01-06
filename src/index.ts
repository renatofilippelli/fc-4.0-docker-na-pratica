import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3000;

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
});

// Test the database connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Define an endpoint
app.get('/data', (req, res) => {
    connection.query('SELECT NOW();', (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});