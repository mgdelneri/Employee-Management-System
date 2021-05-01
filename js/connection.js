const mysql = require('mysql');
const inquirer = require('inquirer');

// Establishing a connection with MySQL 
const connection = mysql.createConnection({
  host: 'localhost',

  // Establishing port
  port: process.env.PORT || 8080,

  // Username
  user: 'root',

  // Password and database name
  password: 'Babyblue17!',
  database: 'systemsDB',
});

connection.connect((err) => {
  if (err) throw err;
  runChoice();
});

const runChoice = () => {
    
}
