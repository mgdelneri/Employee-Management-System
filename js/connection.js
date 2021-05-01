// Connecting to npm packages
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

// Establishing a connection with MySQL
const connection = mysql.createConnection({
  host: "localhost",

  // Establishing port
  port: process.env.PORT || 8080,

  // Username
  user: "root",

  // Password and database name
  password: "Babyblue17!",
  database: "systemsDB",
});

// Either show an error or run the runChoice function, which initiates the inquirer prompts
connection.connect((err) => {
  if (err) throw err;
  runChoice();
});

// Function that gives the user the choice of action
const runChoice = () => {
  inquirer
    .prompt({
      name: "choice",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View employees",
        "Add employee",
        "Update employee role",
        "View roles",
        "Add role",
        "View departments",
        "Add department",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "View employees":
          showEmployees();
          break;

        case "Add employee":
          addEmployee();
          break;

        case "Update employee role":
          updateEmpRole();
          break;

        case "View roles":
          showRoles();
          break;

        case "Add role":
          addRole();
          break;

        case "View departments":
          showDepartments();
          break;

        case "Add department":
          addDepartment();
          break;
      }
    });
};

const showEmployees = () => {

};

const addEmployee = () => {

};

const updateEmpRole = () => {

};

const showRoles = () => {

};

const addRole = () => {

};

const showDepartments = () => {

};

const addDepartment = () => {

};

