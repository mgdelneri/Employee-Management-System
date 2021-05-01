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
connection.connect(() => {
  // if (err) throw err;
  console.log("Successful connection!");
  runChoice();
});

// Function that gives the user the choice of action
const runChoice = () => {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View employees",
        "Add employee",
        "Update employee role",
        "View roles",
        "Add role",
        "View departments",
        "Add department",
        "Done",
      ],
    })
    .then((answer) => {
      switch (answer.choice) {
        case "View employees":
          return showEmployees();

        case "Add employee":
          return addEmployee();

        case "Update employee role":
          return updateEmpRole();

        case "View roles":
          return showRoles();

        case "Add role":
          return addRole();

        case "View departments":
          return showDepartments();

        case "Add department":
          return addDepartment();
        
        case "Done":
          return done();

        default:
          console.log(`Invalid action: ${answer.action}`);
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

const done = () => {
  console.log("Done!");
  process.exit(); 
}


