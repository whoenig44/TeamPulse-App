const inquirer = require('inquirer');
const db = require('./db/connection');
const Department = require('./models/department');
const Role = require('./models/role');
const Employee = require('./models/employee');

const department = new Department(db);
const role = new Role(db);
const employee = new Employee(db);

async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            const departments = await department.getAllDepartments();
            console.table(departments);
            break;
        case 'View all roles':
            const roles = await role.getAllRoles();
            console.table(roles);
            break;
        case 'View all employees':
            const employees = await employee.getAllEmployees();
            console.table(employees);
            break;
        case 'Add a department':
            const { name } = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:'
            });
            await department.addDepartment(name);
            console.log(`Added department: ${name}`);
            break;
        case 'Add a role':
            const roleDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter the title of the role:'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter the salary of the role:'
                },
                {
                    type: 'input',
                    name: 'departmentId',
                    message: 'Enter the department ID for the role:'
                }
            ]);
            await role.addRole(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
            console.log(`Added role: ${roleDetails.title}`);
            break;
        case 'Add an employee':
            const employeeDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'Enter the first name of the employee:'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Enter the last name of the employee:'
                },
                {
                    type: 'input',
                    name: 'roleId',
                    message: 'Enter the role ID for the employee:'
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Enter the manager ID for the employee (leave blank if none):',
                    default: null
                }
            ]);
            await employee.addEmployee(employeeDetails.firstName, employeeDetails.lastName, employeeDetails.roleId, employeeDetails.managerId);
            console.log(`Added employee: ${employeeDetails.firstName} ${employeeDetails.lastName}`);
            break;
        case 'Update an employee role':
            const updateDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter the ID of the employee to update:'
                },
                {
                    type: 'input',
                    name: 'roleId',
                    message: 'Enter the new role ID for the employee:'
                }
            ]);
            await employee.updateEmployeeRole(updateDetails.employeeId, updateDetails.roleId);
            console.log(`Updated employee ID ${updateDetails.employeeId} with new role ID ${updateDetails.roleId}`);
            break;
        case 'Exit':
            db.end();
            return;
    }

    mainMenu();
}

mainMenu();