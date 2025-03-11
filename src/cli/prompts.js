module.exports = {
    mainMenu: () => {
        return [
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all employees',
                    'Add an employee',
                    'Update an employee role',
                    'Update employee manager',
                    'View employees by manager',
                    'View employees by department',
                    'Delete an employee',
                    'View all roles',
                    'Add a role',
                    'Delete a role',
                    'View all departments',
                    'Add a department',
                    'Delete a department',
                    'View total utilized budget of a department',
                    'Exit'
                ]
            }
        ];
    },

    addEmployeePrompt: () => {
        return [
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the employee\'s first name:'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the employee\'s last name:'
            },
            {
                type: 'list',
                name: 'roleId',
                message: 'Select the employee\'s role:',
                choices: [] // This will be populated dynamically
            },
            {
                type: 'list',
                name: 'managerId',
                message: 'Select the employee\'s manager:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    updateEmployeeRolePrompt: () => {
        return [
            {
                type: 'list',
                name: 'employeeId',
                message: 'Select the employee to update:',
                choices: [] // This will be populated dynamically
            },
            {
                type: 'list',
                name: 'newRoleId',
                message: 'Select the new role for the employee:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    updateEmployeeManagerPrompt: () => {
        return [
            {
                type: 'list',
                name: 'employeeId',
                message: 'Select the employee to update:',
                choices: [] // This will be populated dynamically
            },
            {
                type: 'list',
                name: 'newManagerId',
                message: 'Select the new manager for the employee:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    viewEmployeesByManagerPrompt: () => {
        return [
            {
                type: 'list',
                name: 'managerId',
                message: 'Select a manager to view their employees:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    viewEmployeesByDepartmentPrompt: () => {
        return [
            {
                type: 'list',
                name: 'departmentId',
                message: 'Select a department to view its employees:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    deleteEmployeePrompt: () => {
        return [
            {
                type: 'list',
                name: 'employeeId',
                message: 'Select the employee to delete:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    addRolePrompt: () => {
        return [
            {
                type: 'input',
                name: 'title',
                message: 'Enter the role title:'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the role salary:'
            },
            {
                type: 'list',
                name: 'departmentId',
                message: 'Select the department for this role:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    deleteRolePrompt: () => {
        return [
            {
                type: 'list',
                name: 'roleId',
                message: 'Select the role to delete:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    addDepartmentPrompt: () => {
        return [
            {
                type: 'input',
                name: 'name',
                message: 'Enter the department name:'
            }
        ];
    },

    deleteDepartmentPrompt: () => {
        return [
            {
                type: 'list',
                name: 'departmentId',
                message: 'Select the department to delete:',
                choices: [] // This will be populated dynamically
            }
        ];
    },

    viewTotalBudgetPrompt: () => {
        return [
            {
                type: 'list',
                name: 'departmentId',
                message: 'Select a department to view its total budget:',
                choices: [] // This will be populated dynamically
            }
        ];
    }
};