// Connecting to npm packages
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

// Establishing a connection with MySQL
const connection = mysql.createConnection({
  host: "localhost",

  // Establishing port
  port: 3306,

  // Username
  user: "root",

  // Password and database name
  password: "Babyblue17!",
  database: "systemsDB",
});

// Either show an error or run the runChoice function, which initiates the inquirer prompts
connection.connect((err) => {
  if (err) throw (err);
  console.log(err);
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
          console.log(`Invalid action: ${answer.choice}`);
          break;  
      }
    });
};

const showEmployees = () => {
  let query = "SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.role_id LEFT JOIN department ON role.department_id = department.department_id LEFT JOIN employee manager ON manager.role_id = employee.manager_id";
  connection.query(query, (err, employees) => {
    console.log(err);
    if (err) throw (err);
    console.log(employees);
    console.log("\n");
    console.table("Employees", employees); 
    runChoice(); 
  });
}

const addEmployee = () => {
  inquirer
    prompt(
      {
        name: "newEmpFirstName",
        type: "input",
        message: "What is the employee's first name?"
      },
      {
        name: "newEmpLastName",
        type: "input",
        message: "What is the employee's last name?"
      },
      {
        name: "newEmpRole",
        type: "list",
        message: "What is the employee's role?",
        choice: [
          "Lead Engineer",
          "Software Engineer",
          "Sales Lead",
          "Salesperson",
          "Accountant Manager",
          "Accountant",
          "Legal Team Lead",
          "Lawyer"
        ]
      },
      {
        name: "newEmpManager",
        type: "list",
        message: "Who is the employee's manager?",
        choice: [
          "Janelle Monae",
          "Marisa Monte",
          "Elis Regina",
          "Beyonce Knowles"
        ]
      }
    )
    /*.then((answer) => {
        const newEmpQuery = 'INSERT INTO employee (first_name, last_name) VALUES ?';
        connection.query(newEmpQuery, { employee: answer.employee }, (err, res) => {
          res.forEach(({ first_name, last_name }) => {
            console.log(
              `Employee: ${} || Song: ${song} || Year: ${year}`
            );
          });
          runSearch();
        });
  
    })*/

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


