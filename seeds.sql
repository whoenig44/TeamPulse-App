-- Drop existing tables
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

-- Create tables
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER REFERENCES department(id)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER REFERENCES role(id),
    manager_id INTEGER REFERENCES employee(id)
);

-- Insert seed data
INSERT INTO department (name) VALUES
('Engineering'),
('Finance'),
('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 80000, 1),
('Accountant', 60000, 2),
('HR Manager', 75000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Emily', 'Jones', 3, NULL);