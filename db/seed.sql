INSERT INTO department (department_id, name)
VALUES (1, "Engineering");

INSERT INTO department (department_id, name)
VALUES (2, "Sales");

INSERT INTO department (department_id, name)
VALUES (3, "Finance");

INSERT INTO department (department_id, name)
VALUES (4, "Legal");

INSERT INTO role (role_id, title, salary, department_id)
VALUES (1, "Lead Engineer", 180000, 1);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (2, "Software Engineer", 90000, 1);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (3, "Sales Lead", 150000, 2);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (4, "Salesperson", 75000, 2);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (5, "Accountant Manager", 130000, 3);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (6, "Accountant", 85000, 3);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (7, "Legal Team Lead", 170000, 4);

INSERT INTO role (role_id, title, salary, department_id)
VALUES (8, "Lawyer", 100000, 4);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Janelle", "Monae", 1, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (2, "James", "Murphy", 2, 1);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (3, "Marisa", "Monte", 3, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (4, "David", "Bowie", 4, 3);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (5, "Elis", "Regina", 5, NULL); 

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (6, "Thom", "Yorke", 6, 5);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (7, "Beyonce", "Knowles", 7, NULL);

INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (8, "Peter", "Gabriel", 8, 7);